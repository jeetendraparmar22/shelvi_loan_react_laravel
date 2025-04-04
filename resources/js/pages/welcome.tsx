import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Login"></Head>
            <div className="auth-page-wrapper login_wrapper">
                {/* auth page content */}
                <div className="auth-page-content">
                    <div>
                        <h3 className="mobile_title">Travel &amp; Expense Management Portal</h3>
                        <div className="justify-content-center login_row">
                            <div className="col_login">
                                <div className="card login_card mt-4">
                                    <div className="card-body">
                                        <div className="login_logo text-center">
                                            <img src="assets/images/logo.png" alt="Logo" className="img-fluid" />
                                        </div>
                                        <div className="main_title_login mb-4 text-center">
                                            <h5 className="title_login">Travel &amp; Expense Management Portal</h5>
                                            {/* <p class="text-muted">Sign in to continue to Velzon.</p> */}
                                        </div>
                                        <div className="login_content">
                                            <form action="#" className="needs-validation" noValidate>
                                                <div className="mb-4">
                                                    <label htmlFor="username" className="form-label">
                                                        Email
                                                    </label>
                                                    <div className="flex_wrap">
                                                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                        <i className="ri-mail-open-line icon_text align-middle" />
                                                    </div>
                                                    <div className="valid-feedback">Looks good!</div>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="float-end">
                                                        <a href="auth-pass-reset-basic.html" className="text-muted">
                                                            Forgot password?
                                                        </a>
                                                    </div>
                                                    <label className="form-label" htmlFor="password-input">
                                                        Password
                                                    </label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                        <input
                                                            type="password"
                                                            className="form-control password-input pe-5"
                                                            placeholder="Enter password"
                                                            id="password-input"
                                                        />
                                                        <button
                                                            className="btn btn-link position-absolute text-decoration-none text-muted password-addon end-0 top-0"
                                                            type="button"
                                                            id="password-addon"
                                                        >
                                                            <i className="icon_text ri-eye-line align-middle" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="radiobuttons">
                                                    <div className="form-check form-radio-danger mr-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="formradiocolor5"
                                                            id="formradioRight9"
                                                            defaultChecked
                                                        />
                                                        <label className="form-check-label" htmlFor="formradioRight9">
                                                            ON ROLL
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-radio-danger ml-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="formradiocolor5"
                                                            id="formradioRight10"
                                                        />
                                                        <label className="form-check-label" htmlFor="formradioRight10">
                                                            NON-SSO
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="btn_signIn">
                                                    <Link className="btn btn_primary w-100" href={route('loan')}>
                                                        Sign In
                                                    </Link>
                                                </div>
                                                <div className="copyright_wrap text-center">
                                                    <div className="copyright_text"></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                            </div>
                        </div>
                        <div className="images_login">
                            <img src="assets/images/hotel.svg" alt="login image" className="pos_hotel pos_img" />
                            <img src="assets/images/plane.svg" alt="login image" className="pos_plane pos_img" />
                            <img src="assets/images/fly-plane.svg" alt="login image" className="pos_flyplane pos_img" />
                            <img src="assets/images/train.svg" alt="login image" className="pos_train pos_img" />
                            <img src="assets/images/couple.svg" alt="login image" className="pos_couple pos_img" />
                            <img src="assets/images/tourist.svg" alt="login image" className="pos_tourist pos_img" />
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end auth page content */}
            </div>
        </>
    );
}
