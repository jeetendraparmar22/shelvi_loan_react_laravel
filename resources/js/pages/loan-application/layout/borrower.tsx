export default function Borrower({ setData, data }) {
    return (
        <>
            <div className="add_mrg_details_wrap">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="card-title mb-0">Borrower Details</h5>
                    </div>
                    <div className="apply_mrg_advance">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="first_name" className="form-label">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="first_name"
                                            name="first_name"
                                            placeholder="Enter First Name"
                                            className="form-control"
                                            value={data.first_name}
                                            onChange={(e) => setData('first_name', e.target.value)}
                                        />
                                        {/* {errors.borrower.first_name && <div className="text-danger">{errors.borrower.first_name}</div>} */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="last_name" className="form-label">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            placeholder="Enter Last Name"
                                            className="form-control"
                                            value={data.last_name}
                                            onChange={(e) => setData('last_name', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="surname" className="form-label">
                                            Surname
                                        </label>
                                        <input
                                            type="text"
                                            id="surname"
                                            name="surname"
                                            placeholder="Enter Surname"
                                            className="form-control"
                                            value={data.surname}
                                            onChange={(e) => setData('surname', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            className="form-control"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="mobile_no" className="form-label">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="text"
                                            id="mobile_no"
                                            name="mobile_no"
                                            placeholder="Enter Mobile Number"
                                            className="form-control"
                                            value={data.mobile_no}
                                            onChange={(e) => setData('mobile_no', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="alternate_mobile_no" className="form-label">
                                            Alternate Mobile Number
                                        </label>
                                        <input
                                            type="text"
                                            id="alternate_mobile_no"
                                            name="alternate_mobile_no"
                                            placeholder="Enter Alternate Mobile Number"
                                            className="form-control"
                                            value={data.alternate_mobile_no}
                                            onChange={(e) => setData('alternate_mobile_no', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="adhar_card" className="form-label">
                                            Aadhaar Card
                                        </label>
                                        <input
                                            type="text"
                                            id="adhar_card"
                                            name="adhar_card"
                                            placeholder="Enter Aadhaar Card Number"
                                            className="form-control"
                                            value={data.adhar_card}
                                            onChange={(e) => setData('adhar_card', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col_form mb-3">
                                    <div>
                                        <label htmlFor="remark_customer_detail" className="form-label">
                                            Remark (Customer Detail)
                                        </label>
                                        <textarea
                                            id="remark_customer_detail"
                                            name="remark_customer_detail"
                                            placeholder="Enter Remark"
                                            className="form-control"
                                            rows="3"
                                            value={data.remark_customer_detail}
                                            onChange={(e) => setData('remark_customer_detail', e.target.value)}
                                        ></textarea>
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
