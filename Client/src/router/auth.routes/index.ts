// src/routes/auth.routes.tsx
import { RouteObject } from "react-router-dom";

// Import components/routes
import PublicRoute from "../components/public.routes";

// Import views/pages
import { Login } from "../../views/Auth/Login";

export const authRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <PublicRoute Element={Login} title="Login" />
    }
];