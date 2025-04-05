import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="page-content">
                <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Dashboard</h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">
                                            <a href="javascript: void(0);">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard_wrapper">
                        <div className="pt-3 pr-1 pb-3 pl-1">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6 col-md-12">
                                        <div className="card">
                                            <h5 className="card-title mt-3 mr-2 mb-0 ml-3">Your Travel Request</h5>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-info mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">TOTAL</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-secondary mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">SETTLED</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-warning mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">UN-SETTLED</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-12">
                                        <div className="card">
                                            <h5 className="card-title mt-3 mr-2 mb-0 ml-3">Your Travel Expenses Avg/Trip: 7605</h5>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-info mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">TOTAL</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-secondary mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">SETTLED</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-warning mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">UN-SETTLED</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-12">
                                        <div className="card">
                                            <h5 className="card-title mt-3 mr-2 mb-0 ml-3">Team Mate's Travel</h5>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-info mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">TOTAL</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-secondary mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">SETTLED</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-warning mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">UN-SETTLED</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-12">
                                        <div className="card">
                                            <h5 className="card-title mt-3 mr-2 mb-0 ml-3">Your Salary Advance</h5>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-success mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">TOTAL</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-secondary mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">SETTLED</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="card card-animate bg-warning mb-2">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="flex-grow-1">
                                                                        <p className="text-uppercase fw-medium mb-0 text-white">UN-SETTLED</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-end justify-content-between mt-1">
                                                                    <div>
                                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-3 text-white">
                                                                            <span className="counter-value" data-target={36894}>
                                                                                36,894
                                                                            </span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="avatar-sm flex-shrink-0">
                                                                        <span className="avatar-title bg-opacity-25 fs-3 rounded bg-white">
                                                                            <i className="bx bxs-user-circle text-white" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end page title */}
                </div>
                {/* container-fluid */}
            </div>
        </AppLayout>
    );
}
