import { createBrowserRouter } from "react-router";
import Layout from "../Layout";

import { authRoutes } from "./auth.routes";
export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            ...authRoutes
        ],
    }
]);