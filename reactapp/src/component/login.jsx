import React, { useState } from 'react';
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Login = ({handleLoginform}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[message,setMessage]=useState('');
  const [loading,setLoading] = useState(false);
const navigate=useNavigate;
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try{
        const response= await axios.post("http://localhost:5007/Weeding/user/signin",
        {
            email,
            password,
        });
        setMessage(response.data.message)
        localStorage.setItem("token",response.data.token);
        navigate("/dashboard")
    }
    catch(error){
        setMessage(error.response?.data?.message ||'Login Failed')
    }
    finally{
        setLoading(false);
    }
  };
const styles={
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Black transparent background
        zIndex: 1000, // Ensures it's on top of everything
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      modal: {
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "400px",
        maxWidth: "90%",
      },
}
  return (
    <div
      style={styles.overlay}
    >
      <div
        style={styles.modal}
      >
        <div style={{display:"flex",gap:"300px",flexDirection:"row"}}><div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#4a5568',
          }}
        >
          Login
        </div><IoClose onClick={handleLoginform} style={{marginTop:"10px"}} /></div>
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
            disabled={loading}
          >
            {loading? 'Loading...' : 'Login'}
          </button>
        </form>
        {message && <p style={{ marginTop: '1rem', color: '#e74c3c' }}>{message}</p>}
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
