import { Link } from '@inertiajs/react';

const AppSidebarLayout = () => {
    return (
        <>
            {/* ========== App Menu ========== */}
            <div className="app-menu navbar-menu">
                {/* LOGO */}
                <div className="navbar-brand-box navbar_dark_light_mode">
                    {/* Light Logo*/}
                    <a href={route('dashboard')} className="logo logo-light">
                        <span className="logo-lg">
                            <img src="/assets/images/logo.svg" alt="logo" />
                        </span>
                    </a>
                    <button type="button" className="btn btn-sm fs-20 header-item btn-vertical-sm-hover float-end p-0" id="vertical-hover">
                        <i className="ri-record-circle-line" />
                    </button>
                </div>
                <div id="scrollbar">
                    <div className="container-fluid">
                        <div id="two-column-menu" />
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="menu-title">
                                <span data-key="t-menu">User Menu</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active menu-link" href={route('dashboard')}>
                                    <i className="ri-home-5-line" />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link menu-link"
                                    href="#Travel_Desk"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="Report"
                                >
                                    <i className="ri-clipboard-line" />
                                    <span> Vehicle Loan</span>
                                </a>
                                <div className="menu-dropdown collapse" id="Travel_Desk">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link href={route('loan-applications.create')} className="nav-link">
                                                <span>Crate New Loan Application</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={route('loan-applications.index')} className="nav-link">
                                                <span>Loan Application List</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={route('loan.approved')} className="nav-link">
                                                <span>Approved Loan</span>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <a href="travel_desk_booked_history.html" className="nav-link">
                                                <span>Booked History</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link menu-link"
                                                href="#uploadInvoices"
                                                data-bs-toggle="collapse"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="Report"
                                            >
                                                <span>Upload Invoices</span>
                                            </a>
                                            <div className="menu-dropdown collapse" id="uploadInvoices">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="upload_vendor_invoice.html" className="nav-link">
                                                            <span>Upload Vendor Invoices</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="vendor_payment_process.html" className="nav-link">
                                                            <span>Vendor Payment Process</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="track_invoice_status.html" className="nav-link">
                                                            <span>Track Invoice Status </span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="invoice_bill_no.html" className="nav-link">
                                                            <span>Invoice Process by Bill No. </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="daily_expenses.html" className="nav-link">
                                                <span>Daily Expenses</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="travel_desk_cancellation.html" className="nav-link">
                                                <span>Cancellation</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link menu-link"
                                                href="#Policy"
                                                data-bs-toggle="collapse"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="Report"
                                            >
                                                <span>Policy / Classification</span>
                                            </a>
                                            <div className="menu-dropdown collapse" id="Policy">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="travel_policy.html" className="nav-link">
                                                            <span>Travel Policy</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="city_classification.html" className="nav-link">
                                                            <span>City Classification </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                <a
                                    className="nav-link menu-link"
                                    href="#Master"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="Report"
                                >
                                    <i className="ri-database-2-fill" /> <span> Master Data</span>
                                </a>
                                <div className="menu-dropdown collapse" id="Master">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="manage_employees.html" className="nav-link">
                                                <span>Manage Employees</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="manage_categories.html" className="nav-link">
                                                <span>Categories </span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link menu-link"
                                                href="#Travel_Budget"
                                                data-bs-toggle="collapse"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="Report"
                                            >
                                                <span>Travel Budget </span>
                                            </a>
                                            <div className="menu-dropdown collapse" id="Travel_Budget">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="travel_budget.html" className="nav-link">
                                                            <span>Travel Budget</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="project_budget.html" className="nav-link">
                                                            <span>Project Budget</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link menu-link"
                                                href="#Manage_Business"
                                                data-bs-toggle="collapse"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="Report"
                                            >
                                                <span>Manage Business Area </span>
                                            </a>
                                            <div className="menu-dropdown collapse" id="Manage_Business">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="manage_states.html" className="nav-link">
                                                            <span> States (Add / Edit ) </span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="manage_city.html" className="nav-link">
                                                            <span>City (Add / Edit )</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="state_sap_code.html" className="nav-link">
                                                            <span>States SAP Code</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="business_area_sap_code.html" className="nav-link">
                                                            <span>Business Area SAP Code</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link menu-link"
                                                href="#Travel_Operations"
                                                data-bs-toggle="collapse"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="Report"
                                            >
                                                <span>Travel Operations</span>
                                            </a>
                                            <div className="menu-dropdown collapse" id="Travel_Operations">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="manage_service_providers.html" className="nav-link">
                                                            <span> Service Providers </span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="manage_hotel_category.html" className="nav-link">
                                                            <span>Guest House / Hotel </span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="vendor_service_changes.html" className="nav-link">
                                                            <span>Vendor Service Changes </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="add_cost_center.html" className="nav-link">
                                                <span> Add Cost Center </span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="travel_policy.html" className="nav-link">
                                                <span>Policy / Classification </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link menu-link"
                                    href="#Expense_Checker"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="Report"
                                >
                                    <i className="ri-suitcase-line" />
                                    <span> Expense Checker </span>
                                </a>
                                <div className="menu-dropdown collapse" id="Expense_Checker">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="expense_checker_inbox.html" className="nav-link">
                                                <span>Inbox</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="auditor_checker.html" className="nav-link">
                                                <span>Checker / F.Head / Auditor</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link menu-link"
                                                href="#Vendor_Invoices_Process"
                                                data-bs-toggle="collapse"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="Report"
                                            >
                                                <span>Vendor Invoices Process</span>
                                            </a>
                                            <div className="menu-dropdown collapse" id="Vendor_Invoices_Process">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="vendor_invoice_process.html" className="nav-link">
                                                            <span>Vendor Invoices</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="vendro_payment_credited.html" className="nav-link">
                                                            <span>Vendor Payment Credited</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="track_invoice_status.html" className="nav-link">
                                                            <span>Track Invoice Status</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="travel_policy.html" className="nav-link">
                                                <span>Policy / Classification</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link menu-link"
                                    href="#Finance_Head"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="Report"
                                >
                                    <i className="ri-account-circle-line" /> <span> Finance Head </span>
                                </a>
                                <div className="menu-dropdown collapse" id="Finance_Head">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="finance_head_inbox.html" className="nav-link">
                                                <span> Inbox(Verified By Checker)</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="finance_head_checker.html" className="nav-link">
                                                <span>Checker / F.Head / Auditor</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link menu-link"
                                                href="#Vendor_Invoices_Process"
                                                data-bs-toggle="collapse"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="Report"
                                            >
                                                <span>Vendor Invoices Process</span>
                                            </a>
                                            <div className="menu-dropdown collapse" id="Vendor_Invoices_Process">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="vendor_invoice_process.html" className="nav-link">
                                                            <span>Vendor Invoices</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="vendro_payment_credited.html" className="nav-link">
                                                            <span>Vendor Payment Credited</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="track_invoice_status.html" className="nav-link">
                                                            <span>Track Invoice Status</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="travel_policy.html" className="nav-link">
                                                <span>Policy / Classification</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="my_trip.html">
                                    <i className="ri-earth-line" /> <span>My Trip</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="team_trip.html">
                                    <i className="ri-group-line" /> <span>Team’s Trip</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="Expenses.html">
                                    <i className="ri-currency-line" /> <span>Expense</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link menu-link"
                                    href="#Report"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="Report"
                                >
                                    <i className="ri-file-text-line" />
                                    <span>Report</span>
                                </a>
                                <div className="menu-dropdown collapse" id="Report">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="Reports.html" className="nav-link">
                                                <span>Reports</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="advanced_approve_list.html" className="nav-link">
                                                <span>Advanced Approve Payment List</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link menu-link"
                                    href="#salary_advance"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="sidebarMultilevel"
                                >
                                    <i className="ri-money-pound-circle-line" /> <span data-key="Salary Advance"> Salary Advance</span>
                                </a>
                                <div className="menu-dropdown collapse" id="salary_advance">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="normal_salary.html" className="nav-link" data-key="Normal Advance">
                                                Normal Advance{' '}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="marriage_salary.html" className="nav-link" data-key="Marriage">
                                                Marriage{' '}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="special_event_salary.html" className="nav-link" data-key="Special Event">
                                                Special Event{' '}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="medical_salary.html" className="nav-link" data-key=" Medical">
                                                Medical
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="security_deposit_salary.html" className="nav-link" data-key=" Security Deposit">
                                                Security Deposit{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link menu-link"
                                    href="#other_advance"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="sidebarMultilevel"
                                >
                                    <i className="ri-currency-line" /> <span data-key="Other Advance">Other Advance</span>
                                </a>
                                <div className="menu-dropdown collapse" id="other_advance">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="imprest_other_advance.html" className="nav-link" data-key="Imprest Advance">
                                                Imprest Advance
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu-link" method="post" as="button" href={route('logout')}>
                                    <i className="ri-logout-circle-r-line" /> <span>Logout</span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    {/* Sidebar */}
                </div>
                <div className="sidebar-background" />
            </div>
            {/* Left Sidebar End */}

            {/* Vertical Overlay*/}
            <div className="vertical-overlay" />
            {/* ============================================================== */}
            {/* Start right Content here */}
            {/* ============================================================== */}
        </>
    );
};
export default AppSidebarLayout;
