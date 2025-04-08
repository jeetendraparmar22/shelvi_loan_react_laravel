export default function EmiSchedule({ emiSchedules = [] }) {
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
                                    <th scope="col">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="cardtableCheck" />
                                            <label className="form-check-label" htmlFor="cardtableCheck" />
                                        </div>
                                    </th>
                                    <th scope="col">Month</th>
                                    <th scope="col"> Due Date</th>
                                    <th scope="col">EMI Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Payment Receipt</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emiSchedules.length > 0 ? (
                                    emiSchedules.map((emiSchedule, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="cardtableCheck01" />
                                                    <label className="form-check-label" htmlFor="cardtableCheck01" />
                                                </div>
                                            </td>
                                            <td>{emiSchedule.month_number}</td>
                                            <td>{emiSchedule.due_date}</td>
                                            <td>{emiSchedule.emi_amount}</td>
                                            <td>{emiSchedule.status}</td>

                                            <td>
                                                <a href="javascript:void(0)" className="pdf_icon">
                                                    <img src="/assets/images/svg/pdf.svg" alt="pdf icon" className="img-fluid" />
                                                </a>
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-warning custom-toggle active"
                                                    data-bs-toggle="button"
                                                    id="active_Inactive"
                                                >
                                                    <span className="icon-on">
                                                        <i className="ri-refresh-line"></i> Mark As UnPaid
                                                    </span>
                                                    <span className="icon-off">
                                                        <i className="ri-refresh-line"></i> Mark As Paid
                                                    </span>
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
                            <h6>{emiSchedules.reduce((sum, emi) => sum + (parseFloat(emi.total) || 0), 0).toFixed(2)}</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* EMI Details */}
        </>
    );
}
