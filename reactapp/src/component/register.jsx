import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
      <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '640px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: '#4a5568' }}>Register</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label htmlFor="firstName" style={{ display: 'block', color: '#4a5568' }}>First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={inputStyle}
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" style={{ display: 'block', color: '#4a5568' }}>Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div style={{ marginTop: '16px' }}>
            <label htmlFor="email" style={{ display: 'block', color: '#4a5568' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Email"
              required
            />
          </div>
          <div style={{ marginTop: '16px' }}>
            <label htmlFor="password" style={{ display: 'block', color: '#4a5568' }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Password"
              required
            />
          </div>
          <div style={{ marginTop: '16px' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', color: '#4a5568' }}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Confirm Password"
              required
            />
          </div>
          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#38a169', color: 'white', padding: '12px', borderRadius: '8px', marginTop: '24px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2f855a'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#38a169'}
          >
            Register
          </button>
        </form>
        <p style={{ marginTop: '16px', textAlign: 'center', color: '#4a5568' }}>
          Already have an account? <a href="/login" style={{ color: '#38a169', textDecoration: 'underline' }}>Login</a>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '8px 16px',
  marginTop: '8px',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  outline: 'none',
  transition: 'box-shadow 0.2s ease',
  boxShadow: 'none'
};

export default Register;
