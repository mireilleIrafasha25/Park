import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true); // to manage loading state
  const [error, setError] = useState(null); // to handle errors

  useEffect(() => {
    // Fetch user data using Axios
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1'); // Sample API URL
        setUserData({
          name: response.data.name,
          email: response.data.email,
          activities: ["Created a new post", "Updated profile", "Logged in"], // You can change this to real data from your API if needed
        });
      } catch (error) {
        setError('There was an error fetching the user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Inline CSS styles
  const styles = {
    dashboard: {
      display: 'flex',
      height: '100vh',
    },
    sidebar: {
      width: '20%',
      backgroundColor: '#333',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
    },
    content: {
      width: '80%',
      padding: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    userInfo: {
      marginTop: '20px',
    },
    activities: {
      marginTop: '30px',
      listStyleType: 'none',
      paddingLeft: '0',
    },
    activityItem: {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      marginBottom: '10px',
    },
    loading: {
      textAlign: 'center',
      fontSize: '18px',
      color: 'gray',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      fontSize: '18px',
    },
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.sidebar}>
        <h2>Dashboard</h2>
        <ul>
          <li>Profile</li>
          <li>Activities</li>
          <li>Settings</li>
        </ul>
      </div>
      <div style={styles.content}>
        {loading ? (
          <p style={styles.loading}>Loading user data...</p>
        ) : error ? (
          <p style={styles.error}>{error}</p>
        ) : (
          <>
            <h1 style={styles.title}>Welcome, {userData.name}</h1>
            <div style={styles.userInfo}>
              <p>Email: {userData.email}</p>
            </div>
            <h2>Recent Activities</h2>
            <ul style={styles.activities}>
              {userData.activities && userData.activities.map((activity, index) => (
                <li key={index} style={styles.activityItem}>{activity}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
