const AppInnerPage = (props: any) => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">{props.pageTitle}</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item">
                                    <a href={route('dashboard')}>Home</a>
                                </li>
                                <li className="breadcrumb-item active">{props.pageTitle}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppInnerPage;
