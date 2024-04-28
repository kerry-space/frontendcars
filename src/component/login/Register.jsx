import React, { useState } from 'react';
import { useAuth } from './AuthContext'; 
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [error, setError] = useState(''); // State to hold error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check password equality before attempting to register
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return; // Prevent form submission
    }

    setError(''); // Clear any previous errors

    try {
      await register(formData.username, formData.password);
      navigate('/'); // Navigate to home or another appropriate page
    } catch (error) {
      console.error('Registration submission error:', error);
      setError('Failed to register.'); // Display a user-friendly error message
    }
  };

  return (
    <section className="page-section" id="register-form">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Register</h2>
          <h3 className="section-subheading text-muted">Please enter your information to register.</h3>
        </div>
        <form id="registerForm" onSubmit={handleSubmit}>
          <div className="row align-items-stretch mb-5">
            <div className="col-md-12">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              </div>
              {error && <div className="alert alert-danger" role="alert">{error}</div>}
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-xl text-uppercase" type="submit">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
