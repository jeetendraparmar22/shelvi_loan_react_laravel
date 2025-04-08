import AppInnerPage from '@/components/app-inner-page';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

const ApprovedLoan = () => {
    const { approvedLoans } = usePage().props;

    useEffect(() => {
        const tableId = '#travel_desk_dashboard';

        if ($.fn.DataTable.isDataTable(tableId)) {
            $(tableId).DataTable().destroy(); // destroy previous instance
        }

        $(tableId).DataTable({
            responsive: true,
        });

        return () => {
            if ($.fn.DataTable.isDataTable(tableId)) {
                $(tableId).DataTable().destroy();
            }
        };
    }, []);

    return (
        <>
            <AppLayout>
                <Head title="Approved Loan"></Head>
                <div className="page-content">
                    <div className="container-fluid">
                        {/* start page title */}
                        <AppInnerPage pageTitle="Approved Loan"></AppInnerPage>

                        <div className="Cancellation_wrapper mt-3">
                            <div className="Cancellation_sub">
                                <div className="card">
                                    <div className="card-body">
                                        <table
                                            id="travel_desk_dashboard"
                                            className="travel_desk_inbox table-bordered dt-responsive nowrap table-striped table align-middle"
                                        >
                                            <thead>
                                                <tr>
                                                    <th data-ordering="false">Vehicle No</th>
                                                    <th data-ordering="false">Mobile No.</th>
                                                    <th data-ordering="false">Name</th>
                                                    <th data-ordering="false">Approved Date</th>
                                                    <th data-ordering="false">Status</th>
                                                    <th>Action</th>
                                                    {/* <th>From - To</th>
                                                    <th>Approved By</th>
                                                    <th>Status</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {approvedLoans.map((loan) => (
                                                    <tr key={loan.id}>
                                                        <td>
                                                            <a href="" data-bs-toggle="modal" data-bs-target="#view_status" className="linking">
                                                                <strong>
                                                                    <i className="ri-eye-line" /> VHC/{loan.vehicle_registration_no}
                                                                </strong>
                                                            </a>
                                                        </td>
                                                        <td>{loan.mobile_no}</td>
                                                        <td>
                                                            {loan.first_name} {loan.last_name} {loan.surname}
                                                        </td>

                                                        <td>{loan.approved_date}</td>
                                                        <td>{loan.loan_status}</td>
                                                        <td>
                                                            <Link
                                                                href={route('loan.process', loan.id)}
                                                                className="btn btn-sm btn-primary waves-effect waves-light mr-1"
                                                            >
                                                                <i className="ri-calendar-line"></i> Process for Loan
                                                            </Link>
                                                            {/* <a
                                                                href="javascript:void(0)"
                                                                className="btn btn-sm btn-info waves-effect waves-light mr-1"
                                                            >
                                                                <i className="ri-pencil-line"></i> Update
                                                            </a> */}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end page title */}
                    </div>
                    {/* container-fluid */}
                </div>
            </AppLayout>
        </>
    );
};

export default ApprovedLoan;
