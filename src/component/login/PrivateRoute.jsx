import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);  // Adapt based on how authentication state is provided
  
  console.log("isAuth: "+isLoggedIn)

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
