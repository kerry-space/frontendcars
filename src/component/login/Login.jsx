import React, { useState } from 'react';
import { useAuth } from './AuthContext'; 
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(''); // State to store login errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error when user starts typing again
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.username, formData.password);
      navigate('/'); // Redirect after successful login
    } catch (error) {
      setError('Failed to login. Please check your credentials and try again.'); // Set error state to display in the UI
      console.error('Login submission error:', error);
    }
  };

  return (
    <section className="page-section" id="login-form">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Login</h2>
          <h3 className="section-subheading text-muted">Please enter your credentials to login.</h3>
        </div>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="row align-items-stretch mb-5">
            <div className="col-md-12">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              {error && <div className="alert alert-danger" role="alert">{error}</div>} {/* Displaying the error message */}
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-xl text-uppercase" type="submit">Login</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
