import AppInnerPage from '@/components/app-inner-page';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, usePage } from '@inertiajs/react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
import EmiSchedule from './emi-schedule';

export default function EmiSchedulePayment() {
    const { loanApplication, emiSchedules, totalPaid, total_emi_paid, total_emi_unpaid } = usePage().props;

    const emiDateInputRef = useRef(null);

    const [emiStartDate, setEmiStartDate] = useState(loanApplication?.emi_start_date || '');

    useEffect(() => {
        // Initialize Flatpickr on the input element
        const fp = flatpickr(emiDateInputRef.current, {
            dateFormat: 'd-m-Y',
            defaultDate: new Date(emiStartDate),
            onChange: (selectedDates, dateStr) => {
                setEmiStartDate(dateStr);
                setData('start_date', dateStr);
            },
        });
        return () => fp.destroy();
    }, [emiStartDate]);

    // generate EMI schedule
    const { data, setData, post } = useForm({
        loan_id: loanApplication?.id,
        start_date: emiStartDate,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('emi-schedule.generate'), {
            onSuccess: (response) => {
                console.log('EMI schedule generated successfully:', response);
            },
            onError: (errors: any) => {
                console.error('Error generating EMI schedule:', errors);
            },
        });
    };
    return (
        <>
            <AppLayout>
                <Head title="Loan Process" />
                <div className="page-content expense_pending_page">
                    <div className="container-fluid">
                        {/* start page title */}
                        <AppInnerPage pageTitle="Loan Process"></AppInnerPage>
                        <div className="view_page_wrapper">
                            {/* <div className="right_corners mb-3">
                                <button className="btn btn-secondary btn-border waves-effect waves-light mt-0 mr-2" type="button">
                                    Print
                                </button>
                                <button className="btn btn-success btn-border waves-effect waves-light mt-0" type="button">
                                    Clarification Conversation
                                </button>
                            </div> */}
                            <div className="detail_main_wrap">
                                <div className="detail_header">
                                    <h4>Application details ({loanApplication.vehicle.vehicle_registration_no})</h4>
                                </div>
                                <div className="detail_card">
                                    <div className="row">
                                        <div className="col-lg-4 pr-0 pl-0">
                                            <div className="table-responsive">
                                                <table className="table-borderless detail_tbl_claim mb-0 table">
                                                    <tbody>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Name :</strong>
                                                            </th>
                                                            <td className="text-muted">
                                                                {loanApplication.first_name}
                                                                &nbsp;
                                                                {loanApplication.surname}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Mobile No :</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.mobile_no}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Finance Name :</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.loan.finance_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Excecutive Name :</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.loan.excecutive_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Dealer Name :</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.vehicle.dealer_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Vehicle Type :</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.vehicle.vehicle_type}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 pr-0 pl-0">
                                            <div className="table-responsive">
                                                <table className="table-borderless detail_tbl_claim mb-0 table">
                                                    <tbody>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Vehicle Registration Year :</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.vehicle.vehicle_registration_year}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>File Login Date :</strong>
                                                            </th>
                                                            <td className="text-muted">
                                                                {new Date(loanApplication.loan.file_log_in_date).toLocaleDateString('en-GB')}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Address:</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.address.address}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Loan Amount :</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.loan.loan_amount} - INR</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Rate of Interest :</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.loan.interest_rate} %</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">
                                                                <strong>Total EMI :</strong>
                                                            </th>
                                                            <td className="text-muted">{loanApplication.loan.loan_term} Months</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 pr-0 pl-0">
                                            <div className="attached_btns mt-4">
                                                {loanApplication.loan.loan_status === 'approved' ? (
                                                    <button
                                                        className="btn btn-info btn-border mr-2"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#emi_scheduler"
                                                        type="button"
                                                    >
                                                        EMI Schedule
                                                    </button>
                                                ) : null}
                                                {/* <button className="btn btn-info btn-border" type="button">
                                                    Loan Agreement
                                                </button> */}
                                            </div>
                                            {/* <div class="attached_btns mt-2">
                                                <button class="btn btn-primary  mt-2 btn-border mr-3" type="button">Special Approval For TR/752269</button>
                                                <button class="btn btn-primary mt-2 btn-border" type="button">Special Approval For TR/752269/MC2</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <EmiSchedule emiSchedules={emiSchedules} totalPaid={totalPaid}></EmiSchedule>

                            {/* Travel Expense Summary */}
                            <div className="flex_sections_bottom">
                                <div className="section_acc travel_summary_wrapper">
                                    <div className="bg_sec_header">
                                        <div className="d-flex align-items-center">
                                            <h5>Loan Deails</h5>
                                        </div>
                                    </div>
                                    <div className="sub_card">
                                        <div className="table-responsive">
                                            <table className="table-borderless tbl_summary mb-0 table">
                                                <tbody>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            Total Loan
                                                        </th>
                                                        <th>:</th>
                                                        <td>{loanApplication.loan.loan_amount}-INR</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            Total Paid Amount
                                                        </th>
                                                        <th>:</th>
                                                        <td>
                                                            {loanApplication.loan.loan_amount - loanApplication.loan.outstanding_principal_amount}-INR
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            Paid EMI
                                                        </th>
                                                        <th>:</th>
                                                        <td>{total_emi_paid}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            Remaining EMI
                                                        </th>
                                                        <th>:</th>
                                                        <td>{total_emi_unpaid}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            Total Remaining Amount
                                                        </th>
                                                        <th>:</th>
                                                        <td>{loanApplication.loan.outstanding_principal_amount}-INR</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn_invoices_flex">
                                    <a href={route('force.closer', loanApplication.id)} className="btn btn-info">
                                        Force Closer Letter
                                    </a>
                                    <a href={route('no.due.certificate', loanApplication.id)} className="btn btn-green btn-border">
                                        NOC
                                    </a>
                                    {/* <button className="btn btn-danger btn-border" data-bs-toggle="modal" data-bs-target="#Clarify_modal">
                                        Agreement
                                    </button> */}
                                </div>
                                <div className="section_acc travel_summary_wrapper approved_by_wrapper">
                                    {/* <div className="bg_sec_header">
                                        <div className="d-flex align-items-center">
                                            <h5>Approved By</h5>
                                        </div>
                                    </div>
                                    <div className="sub_card">
                                        <div className="table-responsive">
                                            <table className="table-borderless tbl_summary mb-0 table">
                                                <tbody>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            Manager
                                                        </th>
                                                        <th>:</th>
                                                        <td>RP Manager at 06-10-2023 19:00</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            SAP Voucher
                                                        </th>
                                                        <th>:</th>
                                                        <td>Not Attached</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            SAP Document
                                                        </th>
                                                        <th>:</th>
                                                        <td>1900117489 at 13-10-2023 13:00</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            Checker Maker
                                                        </th>
                                                        <th>:</th>
                                                        <td>-----------------------</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            Finance Head
                                                        </th>
                                                        <th>:</th>
                                                        <td>-----------------------</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="ps-0" scope="row">
                                                            Auditor
                                                        </th>
                                                        <th>:</th>
                                                        <td>-----------------------</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* end page title */}
                    </div>
                    {/* container-fluid */}
                </div>

                {/* Modals */}
                <div
                    id="emi_scheduler"
                    className="modal fade"
                    tabIndex={-1}
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                    style={{ display: 'none' }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <form onSubmit={submit}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="myModalLabel">
                                        EMI Start Date
                                    </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body p-1">
                                    <div className="confirm_details_tbl">
                                        <div className="other_details">
                                            <div className="row">
                                                <div className="col-lg-12 mb-3">
                                                    <div className="datepicker_cus">
                                                        <input
                                                            type="text"
                                                            placeholder="Enter DateTime"
                                                            className="form-control"
                                                            ref={emiDateInputRef}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                </div>

                {/* End EMI Scheduler Modal */}
            </AppLayout>
        </>
    );
}
