import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#4a5568',
          }}
        >
          Login
        </h2>
        <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                color: '#718096',
                marginBottom: '0.5rem',
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                border: '1px solid #cbd5e0',
                borderRadius: '0.375rem',
                outline: 'none',
                marginTop: '0.25rem',
                transition: 'box-shadow 0.2s',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                color: '#718096',
                marginBottom: '0.5rem',
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                border: '1px solid #cbd5e0',
                borderRadius: '0.375rem',
                outline: 'none',
                marginTop: '0.25rem',
                transition: 'box-shadow 0.2s',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#48bb78',
              color: 'white',
              borderRadius: '0.375rem',
              fontWeight: 'bold',
              transition: 'background-color 0.3s',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#38a169')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#48bb78')}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: '1rem', textAlign: 'center', color: '#718096' }}>
          Don’t have an account?{' '}
          <a
            href="/register"
            style={{
              color: '#48bb78',
              textDecoration: 'none',
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
