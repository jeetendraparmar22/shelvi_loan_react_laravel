export default function Address({ setData, data, errors }) {
    return (
        <>
            <div className="add_mrg_details_wrap">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="card-title mb-0">Address Details</h5>
                    </div>
                    <div className="apply_mrg_advance">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 col_form mb-3">
                                    <div>
                                        <label htmlFor="address" className="form-label">
                                            Address
                                        </label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            placeholder="Enter Address"
                                            className="form-control"
                                            rows="3"
                                            value={data.address}
                                            onChange={(e) => setData('address', e.target.value)}
                                        ></textarea>
                                        {errors.address && <span className="text-danger">{errors.address}</span>}
                                    </div>
                                </div>

                                <div className="col-lg-6 col_form mb-3">
                                    <div>
                                        <label htmlFor="state" className="form-label">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            placeholder="Enter State"
                                            className="form-control"
                                            value={data.state}
                                            onChange={(e) => setData('state', e.target.value)}
                                        />
                                        {errors.state && <span className="text-danger">{errors.state}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-6 col_form mb-3">
                                    <div>
                                        <label htmlFor="city" className="form-label">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Enter City"
                                            className="form-control"
                                            value={data.city}
                                            onChange={(e) => setData('city', e.target.value)}
                                        />
                                        {errors.city && <span className="text-danger">{errors.city}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-6 col_form mb-3">
                                    <div>
                                        <label htmlFor="village" className="form-label">
                                            Village
                                        </label>
                                        <input
                                            type="text"
                                            id="village"
                                            name="village"
                                            placeholder="Enter Village"
                                            className="form-control"
                                            value={data.village}
                                            onChange={(e) => setData('village', e.target.value)}
                                        />
                                        {errors.village && <span className="text-danger">{errors.village}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-6 col_form mb-3">
                                    <div>
                                        <label htmlFor="pincode" className="form-label">
                                            Pincode
                                        </label>
                                        <input
                                            type="text"
                                            id="pincode"
                                            name="pincode"
                                            placeholder="Enter Pincode"
                                            className="form-control"
                                            value={data.pincode}
                                            onChange={(e) => setData('pincode', e.target.value)}
                                        />
                                        {errors.pincode && <span className="text-danger">{errors.pincode}</span>}
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
