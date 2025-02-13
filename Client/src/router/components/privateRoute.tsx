import React from "react";
import { getAuthToken, isTokenExpired } from "../../helper/helper.auth";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface ElementProp {
  Element: React.ComponentType;
  title: string;
}

const PrivateRoute: React.FC<ElementProp> = ({ Element, title }) => {
  const token = getAuthToken();

  document.title = title;
  // Redirect if no token or token is expired
  if (!token || isTokenExpired(token)) {
    Cookies.remove("authToken");
    Cookies.remove("authToken");
    return <Navigate to="/" replace />; // `replace` ensures no back navigation to this route
  }


  // Render the protected element
  return <Element/>;
};

export default PrivateRoute;
