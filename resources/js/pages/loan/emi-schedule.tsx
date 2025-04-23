import { useForm } from '@inertiajs/react';
import flatpickr from 'flatpickr';
import { useEffect, useRef, useState } from 'react';

export default function EmiSchedule({ emiSchedules = [], totalPaid = 0 }) {
    const [paymentDate, setPaymentDate] = useState('');
    const [selectedEmi, setSelectedEmi] = useState(null);
    const [penalty, setPenalty] = useState(''); // Initialize penalty as an empty string
    const [totalAmount, setTotalAmount] = useState(0);
    const { setData, post } = useForm({
        id: '',
        payment_date: '',
        penalty: 0,
    });

    const paymentStatus = () => {
        if (selectedEmi) {
            setData({
                id: selectedEmi.id,
                payment_date: paymentDate,
                penalty: parseFloat(penalty) || 0, // Ensure penalty is sent as a number
            });
            post(route('payment-status.update', selectedEmi.id));
        }
    };

    const paymentStatusDateRef = useRef(null);

    useEffect(() => {
        if (selectedEmi) {
            // Set payment date from due_date
            setPaymentDate(selectedEmi.due_date);

            // Reset penalty and set initial total amount
            setPenalty(''); // Reset penalty to an empty string
            setTotalAmount(selectedEmi.emi_amount); // Initial total amount is just the EMI amount
        }
    }, [selectedEmi]);

    useEffect(() => {
        flatpickr(paymentStatusDateRef.current, {
            dateFormat: 'd-m-Y',
            defaultDate: paymentDate,
            onChange: (selectedDates, dateStr) => {
                setPaymentDate(dateStr);
                setData('payment_date', dateStr);
            },
        });
    }, [paymentDate]);

    // Update total amount whenever penalty changes
    useEffect(() => {
        if (selectedEmi) {
            // Ensure penalty is parsed as a number
            const parsedPenalty = parseFloat(penalty) || 0; // Default to 0 if penalty is empty or invalid
            setTotalAmount(parseFloat(selectedEmi.emi_amount) + parsedPenalty); // Add EMI and penalty as numbers
        }
    }, [penalty, selectedEmi]);

    return (
        <>
            {/* EMI Details */}
            <div className="section_acc Ticket_Details_section">
                <div className="bg_sec_header">
                    <h5>EMI Details</h5>
                </div>
                <div className="sub_card">
                    <div className="ticket_details table-responsive">
                        <table className="table-nowrap tbl_da_particulars bg_white mb-0 table">
                            <thead className="table-light-red">
                                <tr>
                                    <th scope="col">Month</th>
                                    <th scope="col"> Due Date</th>
                                    <th scope="col">EMI Amount</th>
                                    <th scope="col">Penalty</th>
                                    <th scope="col">Total Due</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"> Receipt</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emiSchedules.length > 0 ? (
                                    emiSchedules.map((emiSchedule, index) => (
                                        <tr key={index}>
                                            <td>{emiSchedule.month_number}</td>
                                            <td>{emiSchedule.due_date}</td>
                                            <td>{emiSchedule.emi_amount}-INR</td>
                                            <td>0-INR</td>
                                            <td>{emiSchedule.emi_amount}-INR</td>

                                            <td>
                                                <span className={`badge ${emiSchedule.status === 'unpaid' ? 'bg-danger' : 'bg-green'}`}>
                                                    {emiSchedule.status === 'unpaid' ? 'Unpaid' : 'Paid'}
                                                </span>
                                            </td>

                                            <td>
                                                {emiSchedule.status === 'paid' && (
                                                    <a href={route('download.receipt', emiSchedule.id)} className="pdf_icon">
                                                        <img src="/assets/images/svg/pdf.svg" alt="pdf icon" className="img-fluid" />
                                                    </a>
                                                )}
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#payment_status_modal"
                                                    className="btn btn-sm btn-warning active"
                                                    onClick={() => setSelectedEmi(emiSchedule)} // Set the selected EMI schedule
                                                >
                                                    Mark as Paid
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="10" className="text-center">
                                            No EMI schedules available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="total_tbl_wrap">
                            <h5>Grand Total</h5>
                            <h5>:</h5>
                            <h6>{totalPaid}</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* EMI Details */}

            <div id="payment_status_modal" className="modal fade" tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModalLabel">
                                Update Payment Status
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-1">
                            <div className="confirm_details_tbl">
                                <div className="other_details">
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <label className="form-label">Payment Date</label>
                                            <input type="text" placeholder="Enter DateTime" className="form-control" ref={paymentStatusDateRef} />

                                            <label className="form-label">EMI Amount</label>
                                            <input type="number" value={selectedEmi?.emi_amount || 0} className="form-control" readOnly />

                                            <label className="form-label">Penalty</label>
                                            <input
                                                type="number"
                                                value={penalty}
                                                className="form-control"
                                                onChange={(e) => setPenalty(e.target.value)} // Update penalty dynamically
                                            />

                                            <label className="form-label">Total Amount (EMI + Penalty)</label>
                                            <input type="number" value={totalAmount} className="form-control" readOnly />

                                            <label className="form-label">Payment mode</label>
                                            <select name="payment_mode" id="payment_mode" className="form-select">
                                                <option className="form-control" value="cash">
                                                    Cash
                                                </option>
                                                <option className="form-control" value="online">
                                                    Online
                                                </option>
                                                <option className="form-control" value="bank">
                                                    Bank Transfer
                                                </option>
                                            </select>
                                            <label className="form-label">Remark</label>
                                            <textarea type="text" rows="3" placeholder="Note" className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={paymentStatus} // Use the selected EMI ID
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
