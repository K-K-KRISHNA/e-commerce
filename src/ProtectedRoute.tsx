import React from "react";
import { Navigate, Route } from "react-router-dom";

interface Iprops {
  children: any;
}
const ProtectedRoute = ({ children }: Iprops) => {
  const token = localStorage.getItem("token");
  if (token === null) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
