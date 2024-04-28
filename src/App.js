import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageWrapper from './component/PageWrapper.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import CarForm from './component/carComponent/CarApp.jsx';
import Login from './component/login/Login.jsx';
import PrivateRoute from './component/login/PrivateRoute.jsx';
import { AuthProvider } from './component/login/AuthContext.js';
import Register from './component/login/Register.jsx';

// Assuming AuthContext provides the isAuthenticated value, adapt accordingly
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <PageWrapper>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            
              <Route path="/carCollection" element={
                <PrivateRoute>
                  <CarForm />
                </PrivateRoute>
              } />
            </Routes>
          </PageWrapper>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
