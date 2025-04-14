import AppInnerPage from '@/components/app-inner-page';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import FundModal from './fund-modal';

export default function Inbox() {
    const { funds } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        payment_type: '',
        amount: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        // Append all fields to FormData
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        // Post the data to the backend
        post(route('funds.store'), {
            data: formData,
            onSuccess: () => {
                console.log('Fund added successfully!');
            },
        });
    };

    useEffect(() => {
        const tableId = '#credit_debit_report';

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
        <AppLayout>
            <Head title="Credit/Debit Report" />
            <div className="page-content">
                <div className="container-fluid">
                    {/* start page title */}
                    <AppInnerPage pageTitle="Credit/Debit Report" />
                    <div className="service_provider_wrapper mt-3">
                        <div className="service_provider_content_tabs">
                            <div className="card">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <h5 className="card-title mb-0">Fund Management</h5>
                                    <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add_fund_entry">
                                        Add Entry
                                    </button>
                                </div>
                                <div className="card-body">
                                    <table
                                        id="credit_debit_report"
                                        className="hotel_tbl table-bordered dt-responsive nowrap table-striped table align-middle"
                                    >
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Transaction Date</th>
                                                <th>Description</th>
                                                <th>Type</th>
                                                <th>Amount</th>
                                                <th>Balance</th>

                                                {/* <th>Action</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {funds.map((fund, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{fund.transaction_date}</td>
                                                    <td>{fund.description}</td>
                                                    <td>{fund.type}</td>
                                                    <td className={fund.type === 'credit' ? 'transaction-amount-credit' : 'transaction-amount-debit'}>
                                                        {fund.type === 'credit' ? `+ ${fund.amount}-INR` : `- ${fund.amount}-INR`}
                                                    </td>
                                                    <td>{fund.balance}-INR</td>

                                                    {/* <td className="btns_actions">
                                                        <button type="button" className="btn btn-sm btn-info waves-effect waves-light mr-1">
                                                            <i className="ri-pencil-line" /> Edit
                                                        </button>

                                                        <button type="button" className="btn btn-sm btn-danger waves-effect waves-light mr-1">
                                                            <i className="ri-recycle-line" /> Delete
                                                        </button>
                                                    </td> */}
                                                </tr>
                                            ))}
                                            {/* <tr>
                                                <td>01</td>
                                                <td>Aloft Ahmedabad SG Road </td>
                                                <td>Ahmedabad</td>
                                                <td>Debit</td>
                                                <td className="transaction-amount-debit"> - 3500-INR</td>
                                                <td>1000</td>

                                                <td className="btns_actions">
                                                    <a
                                                        href="#"
                                                        className="btn btn-sm btn-info waves-effect waves-light mr-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#add_hotel"
                                                    >
                                                        <i className="ri-pencil-line" /> Edit
                                                    </a>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-warning custom-toggle active"
                                                        data-bs-toggle="button"
                                                        id="active_Inactive"
                                                    >
                                                        <span className="icon-on">
                                                            <i className="ri-refresh-line" /> Mark Active
                                                        </span>
                                                        <span className="icon-off">
                                                            <i className="ri-refresh-line" /> Mark Inactive
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr> */}
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
            {/* Add Fund Entry Modals */}
            <form onSubmit={handleSubmit}>
                <FundModal setData={setData} />
            </form>
            {/* /.modal */}
        </AppLayout>
    );
}
