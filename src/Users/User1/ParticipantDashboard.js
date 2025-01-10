import React from "react";
import Navbar from "../../components/Navbar/Navbar"; // Import Navbar

const ParticipantDashboard = () => {
  return (
    <div>
      <Navbar /> {/* Navbar component is included here */}
      <h1>Participant Dashboard</h1>
      <p>Welcome, Participant! Here are your events and activities.</p>
    </div>
  );
};

export default ParticipantDashboard;
