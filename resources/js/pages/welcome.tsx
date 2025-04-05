import { Head } from '@inertiajs/react';
import Login from './auth/login';

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Login"></Head>
            <div className="auth-page-wrapper login_wrapper">
                {/* auth page content */}
                <div className="auth-page-content">
                    <div>
                        <h3 className="mobile_title">Shelvi Loan Management Portal</h3>
                        <div className="justify-content-center login_row">
                            <div className="col_login">
                                <div className="card login_card mt-4">
                                    <div className="card-body">
                                        <div className="login_logo text-center">
                                            <img src="assets/images/logo.svg" alt="Logo" className="img-fluid" />
                                        </div>
                                        <div className="main_title_login mb-4 text-center">
                                            <h5 className="title_login">Shelvi Loan Management Portal</h5>
                                            {/* <p class="text-muted">Sign in to continue to Velzon.</p> */}
                                        </div>
                                        <Login></Login>
                                    </div>
                                    {/* end card body */}
                                </div>
                            </div>
                        </div>
                        <div className="images_login">
                            {/* <img src="assets/images/hotel.svg" alt="login image" className="pos_hotel pos_img" />
                            <img src="assets/images/plane.svg" alt="login image" className="pos_plane pos_img" />
                            <img src="assets/images/fly-plane.svg" alt="login image" className="pos_flyplane pos_img" />
                            <img src="assets/images/train.svg" alt="login image" className="pos_train pos_img" />
                            <img src="assets/images/couple.svg" alt="login image" className="pos_couple pos_img" />
                            <img src="assets/images/tourist.svg" alt="login image" className="pos_tourist pos_img" /> */}
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
