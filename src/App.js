import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import LoginPage from "./pages/LoginPage";

// Import dashboard components for different roles
import ParticipantDashboard from "./Users/User1/ParticipantDashboard";
import EventCoordinatorDashboard from "./Users/User2/EventCoordinatorDashboard";
import HallRepDashboard from "./Users/User3/HallRepDashboard";
import AdminDashboard from "./Users/User4/AdminDashboard";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Additional Routes for Dashboards */}
        <Route path="/participant-dashboard" element={<ParticipantDashboard />} />
        <Route path="/event-coordinator-dashboard" element={<EventCoordinatorDashboard />} />
        <Route path="/hall-rep-dashboard" element={<HallRepDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
