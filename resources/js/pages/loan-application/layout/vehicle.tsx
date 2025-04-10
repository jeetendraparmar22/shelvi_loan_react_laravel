export default function Vehicle({ setData, data }) {
    return (
        <>
            <div className="add_mrg_details_wrap">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="card-title mb-0">Vehicle Details</h5>
                    </div>
                    <div className="apply_mrg_advance">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="vehicle_type" className="form-label">
                                            Vehicle Type
                                        </label>
                                        <input
                                            type="text"
                                            id="vehicle_type"
                                            placeholder="Enter Vehicle Type"
                                            className="form-control"
                                            value={data.vehicle_type}
                                            onChange={(e) => setData('vehicle_type', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="vehicle_registration_no" className="form-label">
                                            Vehicle Registration No
                                        </label>
                                        <input
                                            type="text"
                                            id="vehicle_registration_no"
                                            placeholder="Enter Registration No"
                                            className="form-control"
                                            value={data.vehicle_registration_no}
                                            onChange={(e) => setData('vehicle_registration_no', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="vehicle_registration_year" className="form-label">
                                            Vehicle Registration Year
                                        </label>
                                        <input
                                            type="text"
                                            id="vehicle_registration_year"
                                            placeholder="Enter Registration Year"
                                            className="form-control"
                                            value={data.vehicle_registration_year}
                                            onChange={(e) => setData('vehicle_registration_year', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="chasis_no" className="form-label">
                                            Chasis No
                                        </label>
                                        <input
                                            type="text"
                                            id="chasis_no"
                                            placeholder="Enter Chasis No"
                                            className="form-control"
                                            value={data.chasis_no}
                                            onChange={(e) => setData('chasis_no', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="engine_no" className="form-label">
                                            Engine No
                                        </label>
                                        <input
                                            type="text"
                                            id="engine_no"
                                            placeholder="Enter Engine No"
                                            className="form-control"
                                            value={data.engine_no}
                                            onChange={(e) => setData('engine_no', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="fuel_type" className="form-label">
                                            Fuel Type
                                        </label>
                                        <input
                                            type="text"
                                            id="fuel_type"
                                            placeholder="Enter Fuel Type"
                                            className="form-control"
                                            value={data.fuel_type}
                                            onChange={(e) => setData('fuel_type', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="insurance_company_name" className="form-label">
                                            Insurance Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="insurance_company_name"
                                            placeholder="Enter Insurance Company Name"
                                            className="form-control"
                                            value={data.insurance_company_name}
                                            onChange={(e) => setData('insurance_company_name', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="rc_book" className="form-label">
                                            RC Book
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="rc_book"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            onChange={(e) => setData('rc_book', e.target.files[0])}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="insurance_file" className="form-label">
                                            Insurance File
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="insurance_file"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            onChange={(e) => setData('insurance_file', e.target.files[0])}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col_form mb-3">
                                    <div>
                                        <label htmlFor="dealer_name" className="form-label">
                                            Dealer Name
                                        </label>
                                        <input
                                            type="text"
                                            id="dealer_name"
                                            placeholder="Enter Dealer Name"
                                            className="form-control"
                                            value={data.dealer_name}
                                            onChange={(e) => setData('dealer_name', e.target.value)}
                                        />
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
