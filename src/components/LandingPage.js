// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="title">General Championship</h1>
      </header>

      <main className="hero">
        <h1 className="hero-heading">Welcome to the General Championship Portal</h1>
        <p className="hero-text">
          Streamline registration, scheduling, and ranking processes for a
          seamless championship experience.
        </p>
        {/* Use Link to route to the LoginPage */}
        <Link to="/login">
          <button className="get-started-button">Get Started</button>
        </Link>
      </main>

      <footer className="footer">
        <p>© 2025 General Championship. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
