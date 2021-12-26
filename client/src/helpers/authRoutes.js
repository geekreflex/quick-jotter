import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);
  return isAuth ? <Navigate to="/" /> : children;
};

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);
  return isAuth ? children : <Navigate to="/login" />;
};
