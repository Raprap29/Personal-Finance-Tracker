import React from "react";
import { getAuthToken } from "../../helper/helper.auth";
import { Navigate } from "react-router-dom";
interface ElementProp {
    Element: React.ComponentType;
    title: string;
}

const PublicRoute: React.FC<ElementProp> = ({ Element, title }) => {

    const token = getAuthToken();

    document.title = title;

    if (token) {
        return <Navigate to="/list" />;
    }

    return <Element  />;
}

export default PublicRoute;