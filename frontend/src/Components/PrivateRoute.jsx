import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  // Check if token exists in localStorage (or verify token in your backend)
  const token = localStorage.getItem('token');

  // If no token exists, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If token exists, render the element
  return element;
};

export default PrivateRoute;
