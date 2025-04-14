import AppInnerPage from '@/components/app-inner-page';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, usePage } from '@inertiajs/react';
import Address from './layout/address';
import Bank from './layout/bank';
import Borrower from './layout/borrower';
import Loan from './layout/loan';
import Vehicle from './layout/vehicle';

export default function Create() {
    const { errors } = usePage().props;

    const { data, setData, post, processing } = useForm({
        first_name: '',
        last_name: '',
        surname: '',
        email: '',
        mobile_no: '',
        alternate_mobile_no: '',
        adhar_card: '',
        remark_customer_detail: '',
        address: '',
        country: 'India',
        state: '',
        city: '',
        village: '',
        pincode: '',
        vehicle_type: '',
        vehicle_registration_no: '',
        vehicle_registration_year: '',
        chasis_no: '',
        engine_no: '',
        fuel_type: '',
        insurance_company_name: '',
        rc_book: null,
        insurance_file: null,
        dealer_name: '',
        file_log_in_date: '',
        finance_name: 'Shelvi Financial Services',
        finance_address: 'Himmmatnagar,Sabarkantha,Gujarat',
        executive_name: '',
        loan_amount: '',
        emi: '',
        loan_term: '',
        interest_rate: '',
        loan_surakhya_vimo: '',
        iho: '',
        file_charge: '',
        road_side_assite: '',
        rto_charge: '',
        hold_for_insurance: '',
        final_total_amount: '',
        remark_loan_detail: '',
        bank_account_holder_name: '',
        account_no: '',
        bank_name: '',
        branch_name: '',
        ifsc_code: '',
        transfer_loan_amount: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        // Append all fields to FormData
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        // Post the data to the backend
        post(route('loan-applications.store'), {
            data: formData,
            onSuccess: () => {
                console.log('Loan application created successfully!');
            },
        });
    };

    return (
        <>
            <AppLayout>
                <Head title="Create Loan Application"></Head>
                <div className="page-content">
                    <div className="container-fluid">
                        {/* start page title */}
                        <AppInnerPage pageTitle="Create New Loan"></AppInnerPage>

                        <div className="mrg_salary_wrapper">
                            <div className="pt-3 pr-1 pb-3 pl-1">
                                <form onSubmit={handleSubmit}>
                                    <Borrower setData={setData} data={data} errors={errors} />
                                    <Address setData={setData} data={data} errors={errors} />
                                    <Vehicle setData={setData} data={data} errors={errors} />
                                    <Loan setData={setData} data={data} errors={errors} />
                                    <Bank setData={setData} data={data} errors={errors} />
                                    <div className="hstack mb-lg-0 justify-content-center mt-0 mb-3 flex-wrap gap-2">
                                        <button type="submit" className="btn btn-green btn-border" disabled={processing}>
                                            {processing ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
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
