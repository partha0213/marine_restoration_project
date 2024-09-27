// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Ensure this path is correct

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth(); // Ensure this matches your authentication context

  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/Login" replace />;
  }

  // Render child routes if authenticated
  return <Outlet />;
};

export default PrivateRoute;
