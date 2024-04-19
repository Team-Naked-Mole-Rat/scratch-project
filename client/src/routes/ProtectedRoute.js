import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ allowedRoles }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const userRoles = userInfo?.roles || [];

  const hasPermission = allowedRoles.some(role => userRoles.includes(role));

  return hasPermission ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
