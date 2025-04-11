import { Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Loan({ setData, data }) {
    // Calculate emi
    const calculateEMI = (loanAmount, loanTerm, interestRate) => {
        if (!loanAmount || !loanTerm || !interestRate) return 0;

        const monthlyInterestRate = interestRate / (12 * 100);

        // EMI formula: [P * r * (1 + r)^n] / [(1 + r)^n - 1]
        const emi =
            (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) / (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);

        return Math.round(emi); // Round off to nearest integer
    };

    // Update final amount
    const calculateFinalAmount = (
        loanAmountPayment,
        loanSurakhyaVimoPayment,
        ihoPayment,
        fileChargePayment,
        roadSideAssistancePayment,
        rtoChargePayment,
        holdPayment,
    ) => {
        const finalAmount =
            parseFloat(loanAmountPayment) -
            parseFloat(loanSurakhyaVimoPayment) -
            parseFloat(ihoPayment) -
            parseFloat(fileChargePayment) -
            parseFloat(roadSideAssistancePayment) -
            parseFloat(rtoChargePayment) -
            parseFloat(holdPayment);
        return finalAmount;
    };

    useEffect(() => {
        const emi = calculateEMI(data.loan_amount, data.loan_term, data.interest_rate);
        setData('emi', emi); // Update EMI in the state

        const finalAmount = calculateFinalAmount(
            data.loan_amount,
            data.loan_surakhya_vimo,
            data.iho,
            data.file_charge,
            data.road_side_assite,
            data.rto_charge,
            data.hold_for_insurance,
        );

        setData('final_total_amount', finalAmount); // Update Final Amount in the state
    }, [
        data.loan_amount,
        data.loan_term,
        data.interest_rate,
        data.loan_surakhya_vimo,
        data.iho,
        data.file_charge,
        data.road_side_assite,
        data.rto_charge,
        data.hold_for_insurance,
    ]);

    return (
        <>
            <div className="add_mrg_details_wrap">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="card-title mb-0">Loan Details</h5>
                    </div>
                    <div className="apply_mrg_advance">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="file_log_in_date" className="form-label">
                                            File Log In Date
                                        </label>
                                        <input
                                            type="date"
                                            id="file_log_in_date"
                                            className="form-control"
                                            value={data.file_log_in_date}
                                            onChange={(e) => setData('file_log_in_date', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="finance_name" className="form-label">
                                            Finance Name
                                        </label>
                                        <input
                                            type="text"
                                            id="finance_name"
                                            className="form-control"
                                            value="Shelvi Financial Services"
                                            onChange={(e) => setData('finance_name', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="finance_address" className="form-label">
                                            Finance Address
                                        </label>
                                        <textarea
                                            id="finance_address"
                                            className="form-control"
                                            rows="3"
                                            value="Himmatnagar, Gujarat"
                                            onChange={(e) => setData('finance_address', e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="executive_name" className="form-label">
                                            Executive Name
                                        </label>
                                        <input
                                            type="text"
                                            id="executive_name"
                                            placeholder="Enter Executive Name"
                                            className="form-control"
                                            value={data.executive_name}
                                            onChange={(e) => setData('executive_name', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="loan_amount" className="form-label">
                                            Loan Amount
                                        </label>
                                        <input
                                            type="number"
                                            id="loan_amount"
                                            placeholder="Enter Loan Amount"
                                            className="form-control"
                                            value={data.loan_amount}
                                            onChange={(e) => setData('loan_amount', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="emi" className="form-label">
                                            EMI (INR)
                                        </label>
                                        <input
                                            type="number"
                                            id="emi"
                                            placeholder="Enter EMI"
                                            className="form-control"
                                            readOnly
                                            value={data.emi}
                                            onChange={(e) => setData('emi', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="loan_term" className="form-label">
                                            Loan Term (in months)
                                        </label>
                                        <input
                                            type="number"
                                            id="loan_term"
                                            placeholder="Enter Loan Term"
                                            className="form-control"
                                            value={data.loan_term}
                                            onChange={(e) => setData('loan_term', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="interest_rate" className="form-label">
                                            Interest Rate(%)
                                        </label>
                                        <input
                                            type="number"
                                            id="interest_rate"
                                            placeholder="Enter Interest Rate"
                                            className="form-control"
                                            value={data.interest_rate}
                                            onChange={(e) => setData('interest_rate', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="loan_surakhya_vimo" className="form-label">
                                            Loan Surakhya Vimo
                                        </label>
                                        <input
                                            type="text"
                                            id="loan_surakhya_vimo"
                                            placeholder="Enter Loan Surakhya Vimo"
                                            className="form-control"
                                            value={data.loan_surakhya_vimo}
                                            onChange={(e) => setData('loan_surakhya_vimo', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="iho" className="form-label">
                                            IHO
                                        </label>
                                        <input
                                            type="text"
                                            id="iho"
                                            placeholder="Enter IHO"
                                            className="form-control"
                                            value={data.iho}
                                            onChange={(e) => setData('iho', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="file_charge" className="form-label">
                                            File Charge
                                        </label>
                                        <input
                                            type="number"
                                            id="file_charge"
                                            placeholder="Enter File Charge"
                                            className="form-control"
                                            value={data.file_charge}
                                            onChange={(e) => setData('file_charge', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="road_side_assite" className="form-label">
                                            Road Side Assistance
                                        </label>
                                        <input
                                            type="text"
                                            id="road_side_assite"
                                            placeholder="Enter Road Side Assistance"
                                            className="form-control"
                                            value={data.road_side_assite}
                                            onChange={(e) => setData('road_side_assite', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="rto_charge" className="form-label">
                                            RTO Charge
                                        </label>
                                        <input
                                            type="number"
                                            id="rto_charge"
                                            placeholder="Enter RTO Charge"
                                            className="form-control"
                                            value={data.rto_charge}
                                            onChange={(e) => setData('rto_charge', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="hold_for_insurance" className="form-label">
                                            Hold for Insurance
                                        </label>
                                        <input
                                            type="text"
                                            id="hold_for_insurance"
                                            placeholder="Enter Hold for Insurance"
                                            className="form-control"
                                            value={data.hold_for_insurance}
                                            onChange={(e) => setData('hold_for_insurance', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="loan_status" className="form-label">
                                            Loan Status
                                        </label>
                                        <input
                                            type="text"
                                            id="loan_status"
                                            placeholder="Enter Loan Status"
                                            className="form-control"
                                            value={data.loan_status}
                                            onChange={(e) => setData('loan_status', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div>
                                        <label htmlFor="final_total_amount" className="form-label">
                                            Final Total Amount
                                        </label>
                                        <input
                                            type="number"
                                            id="final_total_amount"
                                            placeholder="Enter Final Total Amount"
                                            className="form-control"
                                            readOnly
                                            value={data.final_total_amount}
                                            onChange={(e) => setData('final_total_amount', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col_form mb-3">
                                    <div className="flex_col mt-4">
                                        <label htmlFor="formFile" className="form-label">
                                            Generate PDF :
                                        </label>
                                        <Link href="#" className="btn btn-sm btn-info ml-3">
                                            Click Here
                                        </Link>
                                        <a href="#">
                                            <img src="/assets/images/svg/pdf.svg" className="img-fluid" alt="pdf icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
