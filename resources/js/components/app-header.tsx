import { useInitials } from '@/hooks/use-initials';
import { type BreadcrumbItem, type NavItem, type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

const activeItemStyles = 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const getInitials = useInitials();
    return (
        <>
            <header id="page-topbar">
                <div className="layout-width">
                    <div className="navbar-header">
                        <div className="d-flex">
                            {/* LOGO */}
                            <div className="navbar-brand-box horizontal-logo">
                                <a href="index.html" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src="assets/images/logo-sm.png" alt="" height={22} />
                                    </span>
                                    <span className="logo-lg">
                                        {/* <img src="assets/images/logo-light.png" alt height="17"> */}
                                        <h6>Travel Portal</h6>
                                    </span>
                                </a>
                            </div>
                            <button
                                type="button"
                                className="btn btn-sm fs-16 header-item vertical-menu-btn topnav-hamburger px-3"
                                id="topnav-hamburger-icon"
                            >
                                <span className="hamburger-icon">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </button>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="dropdown d-md-none topbar-head-dropdown header-item">
                                <button
                                    type="button"
                                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                                    id="page-header-search-dropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="bx bx-search fs-22" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                                    <form className="p-3">
                                        <div className="form-group m-0">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search ..."
                                                    aria-label="Recipient's username"
                                                />
                                                <button className="btn btn-primary" type="submit">
                                                    <i className="mdi mdi-magnify" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="header-item d-none d-sm-flex ms-1">
                                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-toggle="fullscreen">
                                    <i className="bx bx-fullscreen fs-22" />
                                </button>
                            </div>
                            <div className="header-item d-none d-sm-flex ms-1">
                                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">
                                    <i className="bx bx-moon fs-22" />
                                </button>
                            </div>
                            <div className="dropdown topbar-head-dropdown header-item ms-1" id="notificationDropdown">
                                <button
                                    type="button"
                                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                                    id="page-header-notifications-dropdown"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="bx bx-bell fs-22" />
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                    aria-labelledby="page-header-notifications-dropdown"
                                >
                                    <div className="dropdown-head bg-primary bg-pattern rounded-top">
                                        <div className="p-3">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="fs-16 fw-semibold m-0 text-white"> Notifications </h6>
                                                </div>
                                                <div className="dropdown-tabs col-auto">
                                                    <span className="badge bg-light-subtle text-body fs-13"> 4 New</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2">
                                            <ul
                                                className="nav nav-tabs dropdown-tabs nav-tabs-custom"
                                                data-dropdown-tabs="true"
                                                id="notificationItemsTab"
                                                role="tablist"
                                            >
                                                <li className="nav-item waves-effect waves-light">
                                                    <a
                                                        className="nav-link active"
                                                        data-bs-toggle="tab"
                                                        href="#alerts-tab"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        Alerts
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-content position-relative" id="notificationItemsTabContent">
                                        <div className="tab-pane fade py-2 ps-2" id="messages-tab" role="tabpanel" aria-labelledby="messages-tab">
                                            <div data-simplebar className="pe-2">
                                                <div className="text-reset notification-item d-block dropdown-item">
                                                    <div className="d-flex">
                                                        <img
                                                            src="assets/images/users/avatar-3.jpg"
                                                            className="rounded-circle avatar-xs me-3"
                                                            alt="user-pic"
                                                        />
                                                        <div className="flex-grow-1">
                                                            <a href="#!" className="stretched-link">
                                                                <h6 className="fs-13 fw-semibold mt-0 mb-1">James Lemire</h6>
                                                            </a>
                                                            <div className="fs-13 text-muted">
                                                                <p className="mb-1">We talked about a project on linkedin.</p>
                                                            </div>
                                                            <p className="fs-11 fw-medium text-uppercase text-muted mb-0">
                                                                <span>
                                                                    <i className="mdi mdi-clock-outline" /> 30 min ago
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="fs-15 px-2">
                                                            <div className="form-check notification-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="messages-notification-check01"
                                                                />
                                                                <label className="form-check-label" htmlFor="messages-notification-check01" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-reset notification-item d-block dropdown-item">
                                                    <div className="d-flex">
                                                        <img
                                                            src="assets/images/users/avatar-2.jpg"
                                                            className="rounded-circle avatar-xs me-3"
                                                            alt="user-pic"
                                                        />
                                                        <div className="flex-grow-1">
                                                            <a href="#!" className="stretched-link">
                                                                <h6 className="fs-13 fw-semibold mt-0 mb-1">Angela Bernier</h6>
                                                            </a>
                                                            <div className="fs-13 text-muted">
                                                                <p className="mb-1">Answered to your comment on the cash flow forecast's graph 🔔.</p>
                                                            </div>
                                                            <p className="fs-11 fw-medium text-uppercase text-muted mb-0">
                                                                <span>
                                                                    <i className="mdi mdi-clock-outline" /> 2 hrs ago
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="fs-15 px-2">
                                                            <div className="form-check notification-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="messages-notification-check02"
                                                                />
                                                                <label className="form-check-label" htmlFor="messages-notification-check02" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-reset notification-item d-block dropdown-item">
                                                    <div className="d-flex">
                                                        <img
                                                            src="assets/images/users/avatar-6.jpg"
                                                            className="rounded-circle avatar-xs me-3"
                                                            alt="user-pic"
                                                        />
                                                        <div className="flex-grow-1">
                                                            <a href="#!" className="stretched-link">
                                                                <h6 className="fs-13 fw-semibold mt-0 mb-1">Kenneth Brown</h6>
                                                            </a>
                                                            <div className="fs-13 text-muted">
                                                                <p className="mb-1">Mentionned you in his comment on 📃 invoice #12501.</p>
                                                            </div>
                                                            <p className="fs-11 fw-medium text-uppercase text-muted mb-0">
                                                                <span>
                                                                    <i className="mdi mdi-clock-outline" /> 10 hrs ago
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="fs-15 px-2">
                                                            <div className="form-check notification-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="messages-notification-check03"
                                                                />
                                                                <label className="form-check-label" htmlFor="messages-notification-check03" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-reset notification-item d-block dropdown-item">
                                                    <div className="d-flex">
                                                        <img
                                                            src="assets/images/users/avatar-8.jpg"
                                                            className="rounded-circle avatar-xs me-3"
                                                            alt="user-pic"
                                                        />
                                                        <div className="flex-grow-1">
                                                            <a href="#!" className="stretched-link">
                                                                <h6 className="fs-13 fw-semibold mt-0 mb-1">Maureen Gibson</h6>
                                                            </a>
                                                            <div className="fs-13 text-muted">
                                                                <p className="mb-1">We talked about a project on linkedin.</p>
                                                            </div>
                                                            <p className="fs-11 fw-medium text-uppercase text-muted mb-0">
                                                                <span>
                                                                    <i className="mdi mdi-clock-outline" /> 3 days ago
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="fs-15 px-2">
                                                            <div className="form-check notification-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="messages-notification-check04"
                                                                />
                                                                <label className="form-check-label" htmlFor="messages-notification-check04" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="view-all my-3 text-center">
                                                    <button type="button" className="btn btn-soft-success waves-effect waves-light">
                                                        View All Messages <i className="ri-arrow-right-line align-middle" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show active p-4" id="alerts-tab" role="tabpanel" aria-labelledby="alerts-tab" />
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown ms-sm-3 header-item topbar-user">
                                <button
                                    type="button"
                                    className="btn"
                                    id="page-header-user-dropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle header-profile-user"
                                            src="assets/images/users/avatar-3.jpg"
                                            alt="Header Avatar"
                                        />
                                        <span className="ms-xl-2 text-start">
                                            <span className="d-none d-xl-inline-block fw-medium user-name-text ms-1">Naresh Prajapati</span>
                                            <span className="d-none d-xl-block fs-12 user-name-sub-text ms-1">naresh.p@dbcorp.in</span>
                                        </span>
                                    </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    {/* item*/}
                                    <a className="dropdown-item" href="pages-profile.html">
                                        <i className="mdi mdi-account-circle text-muted fs-16 me-1 align-middle" />{' '}
                                        <span className="align-middle">Profile</span>
                                    </a>
                                    <a className="dropdown-item" href="https://s.bhaskarmail.com/" target="_blank">
                                        <i className="mdi mdi-lock text-muted fs-16 me-1 align-middle" />{' '}
                                        <span className="align-middle">Change Password</span>
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="https://sites.google.com/dbcorp.in/mytravel/welcome?authuser=0"
                                        target="_blank"
                                    >
                                        <i className="bx bx-book-open text-muted fs-16 me-1 align-middle" />{' '}
                                        <span className="align-middle">User Manual</span>
                                    </a>
                                    <a className="dropdown-item" href="login.html">
                                        <i className="mdi mdi-logout text-muted fs-16 me-1 align-middle" />{' '}
                                        <span className="align-middle" data-key="t-logout">
                                            Logout
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* removeNotificationModal */}
            <div id="removeNotificationModal" className="modal fade zoomIn" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close" />
                        </div>
                        <div className="modal-body">
                            <div className="mt-2 text-center">
                                <div className="fs-15 mx-sm-5 mx-4 mt-4 pt-2">
                                    <h4>Are you sure ?</h4>
                                    <p className="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-4 mb-2 gap-2">
                                <button type="button" className="btn btn-light w-sm" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="btn btn-danger w-sm" id="delete-notification">
                                    Yes, Delete It!
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
        </>
    );
}
