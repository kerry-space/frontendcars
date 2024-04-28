// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const login = async (username, password) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include' // Essential for sending cookies with the request

    };
  
    try {
      const response = await fetch('https://kerrysapi.chickenkiller.com/login', requestOptions);
      const data = await response.json();
  
      if (!response.ok) {
        // When the response is not OK, throw an error with a message from the server or a default error message
        throw new Error(data.message || 'Failed to login with the provided credentials.');
      }
  
      setIsLoggedIn(true); // This should only happen if login is successful
      // Optionally store the JWT token or other authentication details
      console.log('Logged in:', data);
    } catch (error) {
      // Rethrow the error to be caught by the component that handles login
      throw error;
    }
  };
  

  const logout = async () => {

   
      const requestOptions = {
        method: 'GET', // Assuming POST is used for logout
        credentials: 'include' // Essential for sending cookies with the request
      };

    // Perform logout logic (e.g., send logout request to backend)
    try {
        const response = await fetch('https://kerrysapi.chickenkiller.com/logout', requestOptions);

        if (!response.ok) {
            // If the response is not OK, read the response body for details
            const data = await response.json();
            throw new Error(data.message || 'Failed to logout. Please try again.');
        }

        // Update the local state to reflect that the user is no longer logged in
        setIsLoggedIn(false); // Assuming this sets the React state for user authentication
        // Optionally clear local session identifiers or other client-side stored session info

    } catch (error) {
        console.error('Logout error:', error);
        // Optionally handle the error in the UI
        throw error; // Rethrow the error if you need further error handling in the component
    }
};



  const register = async(username, password) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };
  
    try {
      const response = await fetch('https://kerrysapi.chickenkiller.com/register', requestOptions);
      const data = await response.json();
  
      if (response.ok) {
        setIsLoggedIn(true);
        // Optionally store the JWT token or other authentication details
        console.log('Logged in:', data);
      } else {
        // Handle errors, e.g., show error message to user
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
