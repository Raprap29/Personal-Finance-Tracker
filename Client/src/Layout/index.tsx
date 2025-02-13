import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";


export const Layout: FC = () => {
    const location = useLocation();
    const isAuthPage = ['/', '/register'].includes(location.pathname);

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
            <Outlet />
        </>
    )
}
