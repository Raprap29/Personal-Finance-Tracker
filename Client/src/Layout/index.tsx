import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout: FC = () => {
    const location = useLocation();
    const isAuthPage = ['/login', '/register'].includes(location.pathname);

    if (isAuthPage) {
        return (
          <div className="min-h-screen bg-gray-50">
            Not Login
            <Outlet />
          </div>
        );
    }

    return (
        <>
            Login
            <Outlet />
        </>
    )


}

export default Layout;