import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate to redirect user after logout
import './Navbar.css'; // Import the updated CSS

const Navbar = () => {
  const navigate = useNavigate();

  // Handle the logout process
  const handleLogout = () => {
    // Here you can remove user session data like tokens from localStorage/sessionStorage
    localStorage.removeItem('authToken'); // Example of clearing a token
    navigate('/login'); // Redirect the user to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <h2>GC Management IIT ROPAR</h2>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/events" className="navbar-link">
          Events
        </Link>
        <button onClick={handleLogout} className="navbar-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


