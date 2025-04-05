import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

// interface LoginProps {
//     status?: string;
//     canResetPassword: boolean;
// }

export default function Login() {
    const { setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onError: (errors) => {
                if (Object.keys(errors).length > 0) {
                    alert(errors.email || errors.password || 'Invalid Credentials');
                }
            },
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="login_content">
            <form onSubmit={submit} className="needs-validation" noValidate>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                        Mobile No
                    </label>
                    <div className="flex_wrap">
                        <input
                            type="emai"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email "
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <i className="ri-smartphone-line icon_text align-middle" />
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="password-input">
                        Password
                    </label>
                    <div className="position-relative auth-pass-inputgroup mb-3">
                        <input
                            type="password"
                            className="form-control password-input pe-5"
                            placeholder="Enter password"
                            id="password"
                            onChange={(e) => setData('password', e.target.value)}
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

                <div className="btn_signIn">
                    <button className="btn btn_primary w-25" type="submit" disabled={processing}>
                        Login
                    </button>
                </div>
                <div className="copyright_wrap text-center">
                    <div className="copyright_text"></div>
                </div>
            </form>
        </div>
    );
}
