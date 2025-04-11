import AppInnerPage from '@/components/app-inner-page';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Index() {
    const { loanApplications } = usePage().props;

    useEffect(() => {
        const tableId = '#loan_application_list';

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
                <Head title="Create Loan Application"></Head>
                <div className="page-content">
                    <div className="container-fluid">
                        {/* start page title */}
                        <AppInnerPage pageTitle="Loan Application List"></AppInnerPage>

                        <div className="Cancellation_wrapper mt-3">
                            <div className="Cancellation_sub">
                                <div className="card">
                                    <div className="card-body">
                                        <table
                                            id="loan_application_list"
                                            className="travel_desk_inbox table-bordered dt-responsive nowrap table-striped table align-middle"
                                        >
                                            <thead>
                                                <tr>
                                                    <th data-ordering="false">Vehicle No</th>
                                                    <th data-ordering="false">Mobile No.</th>
                                                    <th data-ordering="false">Name</th>
                                                    <th data-ordering="false">File Login Date</th>
                                                    <th data-ordering="false">Status</th>
                                                    <th>Action</th>
                                                    {/* <th>From - To</th>
                                                                    <th>Approved By</th>
                                                                    <th>Status</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loanApplications.map((loan) => (
                                                    <tr key={loan.id}>
                                                        <td>
                                                            <Link href={route('loan.process', loan.id)} className="linking">
                                                                <strong>
                                                                    <i className="ri-eye-line" />
                                                                    VH/{loan.vehicle.vehicle_registration_no}
                                                                </strong>
                                                            </Link>
                                                        </td>
                                                        <td>{loan.mobile_no}</td>
                                                        <td>
                                                            {loan.first_name} {loan.last_name} {loan.surname}
                                                        </td>

                                                        <td>{loan.loan.file_log_in_date}</td>
                                                        <td>{loan.loan.loan_status}</td>
                                                        <td>
                                                            {loan.loan.loan_status === 'approved' ? (
                                                                <Link href="" className="btn btn-sm btn-success waves-effect waves-light mr-1">
                                                                    Approved
                                                                </Link>
                                                            ) : (
                                                                <Link
                                                                    href={route('loan-applications.update', { id: loan.id })}
                                                                    className="btn btn-sm btn-primary waves-effect waves-light mr-1"
                                                                >
                                                                    <i className="ri-calendar-line"></i> Approve Loan
                                                                </Link>
                                                            )}

                                                            <Link href="" className="btn btn-sm btn-info waves-effect waves-light mr-1">
                                                                <i className="ri-pencil-line"></i> Edit
                                                            </Link>
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
}
