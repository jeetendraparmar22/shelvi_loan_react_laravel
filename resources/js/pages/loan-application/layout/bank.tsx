export default function Bank({ setData, data, errors }) {
    return (
        <>
            <div className="add_mrg_details_wrap">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="card-title mb-0">Bank Details</h5>
                    </div>
                    <div className="apply_mrg_advance">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="bank_account_holder_name" className="form-label">
                                            Bank Account Holder Name
                                        </label>
                                        <input
                                            type="text"
                                            id="bank_account_holder_name"
                                            placeholder="Enter Account Holder Name"
                                            className="form-control"
                                            value={data.bank_account_holder_name}
                                            onChange={(e) => setData('bank_account_holder_name', e.target.value)}
                                        />
                                        {errors.bank_account_holder_name && <span className="text-danger">{errors.bank_account_holder_name}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="account_no" className="form-label">
                                            Account Number
                                        </label>
                                        <input
                                            type="text"
                                            id="account_no"
                                            placeholder="Enter Account Number"
                                            className="form-control"
                                            value={data.account_no}
                                            onChange={(e) => setData('account_no', e.target.value)}
                                        />
                                        {errors.account_no && <span className="text-danger">{errors.account_no}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="bank_name" className="form-label">
                                            Bank Name
                                        </label>
                                        <input
                                            type="text"
                                            id="bank_name"
                                            placeholder="Enter Bank Name"
                                            className="form-control"
                                            value={data.bank_name}
                                            onChange={(e) => setData('bank_name', e.target.value)}
                                        />
                                        {errors.bank_name && <span className="text-danger">{errors.bank_name}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="branch_name" className="form-label">
                                            Branch Name
                                        </label>
                                        <input
                                            type="text"
                                            id="branch_name"
                                            placeholder="Enter Branch Name"
                                            className="form-control"
                                            value={data.branch_name}
                                            onChange={(e) => setData('branch_name', e.target.value)}
                                        />
                                        {errors.branch_name && <span className="text-danger">{errors.branch_name}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="ifsc_code" className="form-label">
                                            IFSC Code
                                        </label>
                                        <input
                                            type="text"
                                            id="ifsc_code"
                                            placeholder="Enter IFSC Code"
                                            className="form-control"
                                            value={data.ifsc_code}
                                            onChange={(e) => setData('ifsc_code', e.target.value)}
                                        />
                                        {errors.ifsc_code && <span className="text-danger">{errors.ifsc_code}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="transfer_loan_amount" className="form-label">
                                            Transfer Loan Amount
                                        </label>
                                        <input
                                            type="number"
                                            id="transfer_loan_amount"
                                            placeholder="Enter Loan Amount"
                                            className="form-control"
                                            value={data.transfer_loan_amount}
                                            onChange={(e) => setData('transfer_loan_amount', e.target.value)}
                                        />
                                        {errors.transfer_loan_amount && <span className="text-danger">{errors.transfer_loan_amount}</span>}
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
