import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function PaymentReceipt() {
    return (
        <>
            <AppLayout>
                <Head title="Payment Receipt" />
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModalLabel">
                                Bill 132456 of Vendor Patidar Travel
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                {' '}
                            </button>
                        </div>
                        <div className="modal-body p-1">
                            <div className="Booking_details_wrapp">
                                <div className="card_data_view">
                                    <div className="table-responsive">
                                        <table className="table-borderless Booking_details_tbl mb-0 table">
                                            <tbody>
                                                <tr>
                                                    <th className="ps-0" scope="row">
                                                        <strong>Trip ID</strong>
                                                    </th>
                                                    <th>:</th>
                                                    <td>TR/766681/MC2</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">
                                                        <strong>Traveller</strong>
                                                    </th>
                                                    <th>:</th>
                                                    <td>Naresh Kantilal Prajapati</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">
                                                        <strong>Mobile</strong>
                                                    </th>
                                                    <th>:</th>
                                                    <td>9925022051</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">
                                                        <strong>Mode</strong>
                                                    </th>
                                                    <th>:</th>
                                                    <td>Train Tickets</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">
                                                        <strong>PNR</strong>
                                                    </th>
                                                    <th>:</th>
                                                    <td>sdsdsdsdsd</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">
                                                        <strong>Amount</strong>
                                                    </th>
                                                    <th>:</th>
                                                    <td>100</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">
                                                        <strong>Comment</strong>
                                                    </th>
                                                    <th>:</th>
                                                    <td>Testing</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-secondary">
                                Approve and Forward to Finance
                            </button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </AppLayout>
        </>
    );
}
