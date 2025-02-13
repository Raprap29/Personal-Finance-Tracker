// src/routes/auth.routes.tsx
import { RouteObject } from "react-router";

// Import components/routes
import PublicRoute from "../components/publicRoute";

// Import views/pages
import Login from "../../views/Auth/Login";

export const authRoutes: RouteObject[] = [
    {
        path: '/',
        element: <PublicRoute Element={Login} title="Login" />
    }
];