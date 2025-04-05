import AppHeaderLayout from './app/app-header-layout';
import AppSidebarLayout from './app/app-sidebar-layout';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id="layout-wrapper">
            <AppHeaderLayout />
            <AppSidebarLayout />
            <div className="main-content">{children}</div>
        </div>
    );
};

export default AppLayout;
