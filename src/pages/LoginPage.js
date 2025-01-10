import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
        role
      });
      alert('Login successful');

      // Redirect based on role
      if (role === 'Participant') navigate('/participant-dashboard');
      else if (role === 'Event Coordinator') navigate('/event-coordinator-dashboard');
      else if (role === 'Hall Rep') navigate('/hall-rep-dashboard');
      else if (role === 'Admin') navigate('/admin-dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page-box">
        <h2 className="login-page-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="login-page-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-page-input"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            className="login-page-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Participant">Participant</option>
            <option value="Admin">Admin</option>
            <option value="Hall Rep">Hall Rep</option>
            <option value="Event Coordinator">Event Coordinator</option>
          </select>
          <button type="submit" className="login-page-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
