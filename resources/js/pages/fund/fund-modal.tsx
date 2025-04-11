export default function FundModal({ setData }) {
    return (
        <>
            <div id="add_fund_entry" className="modal fade" tabIndex={-1} aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="#">
                                Add New Entry
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                {' '}
                            </button>
                        </div>
                        <div className="modal-body p-1">
                            <div className="Car_wrapp">
                                <div className="content_section pl-4">
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <div>
                                                <label className="form-label mb-1">Select Payment Type </label>
                                                <select
                                                    className="form-control"
                                                    data-choices
                                                    name="choices-single-default"
                                                    id="payment_type"
                                                    onChange={(e) => setData('payment_type', e.target.value)}
                                                >
                                                    <option value="">Select Type</option>
                                                    <option value="credit">Credit</option>
                                                    <option value="debit">Debit</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div>
                                                <label className="form-label mb-1">Amount (INR)</label>
                                                <input
                                                    type="number"
                                                    placeholder="Enter Amount"
                                                    id="amount"
                                                    className="form-control"
                                                    onChange={(e) => setData('amount', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-1">
                                            <div>
                                                <label className="form-label mb-1">Description</label>
                                                <textarea
                                                    typeof="text"
                                                    placeholder="Enter Description"
                                                    rows={2}
                                                    id="description"
                                                    className="form-control"
                                                    onChange={(e) => setData('description', e.target.value)}
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
                            <button
                                type="submit"
                                className="btn btn-primary"
                                data-toast-classname="success"
                                data-bs-dismiss="modal"
                                data-toast
                                data-toast-text="Added Successfully."
                                data-toast-position="right"
                                data-toast-duration={3000}
                                data-toast-close="close"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
        </>
    );
}
