import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log("STATEauth:", userInfo)

  const userRoles = userInfo?.roles || [];

  console.log("Allowed Roles: ", allowedRoles);
  console.log("User Roles: ", userRoles)

  const hasPermission = allowedRoles.some(role => userRoles.includes(role));

  return hasPermission ? children : <Navigate to="/" />;
};

export default ProtectedRoute;