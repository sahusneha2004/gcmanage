const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
const db = require("./db"); // Database connection (implement your database query here)
const path = require("path");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
app.use(bodyParser.json()); // will store in req.body
app.use(express.json()); // Add this to parse JSON request bodies
app.use(express.static(path.join(__dirname, "public")));
// Sample Users (for demonstration purposes, should be replaced with actual DB calls)
const users = [
  { id: 1, username: "testuser", email: "2021csb1134@iitrpr.ac.in" },
];
const transporter = nodemailer.createTransport({
  service: "gmail", // Or use your email provider's service
  auth: {
    user: "s20.bindra@gmail.com", // Replace with your email address
    pass: "islp zamh fcol bvhu", // Replace with your email password or app-specific password
  },
});
const adminRoutes = require("./routes/adminRoutes");
app.use("/", adminRoutes);

const eventCoordinator = require("./routes/eventCoordinator");
app.use("/admin", adminRoutes);
// const admin = require('./models/admin');
const event = require("./models/event");
const team = require("./models/team");
const user = require("./models/user");

// Generate OTP
function generateOTP() {
  return crypto.randomInt(100000, 999999).toString(); // 6-digit OTP
}

// Send OTP via email
function sendOTPEmail(email, otp) {
  const mailOptions = {
    from: "s20.bindra@gmail.com", // Replace with your email address
    to: email,
    subject: "Your OTP for Login",
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending OTP:", error);
    } else {
      console.log("OTP sent: " + info.response);
    }
  });
}

const otpSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

const OTP = mongoose.model("OTP", otpSchema);

// Route to initiate OTP-based login
app.post("/login-otp", async (req, res) => {
  const { username } = req.body;

  // Find user by username
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // Generate OTP
  const otp = generateOTP();
  const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // OTP expiry time: 5 minutes

  // Save OTP to MongoDB
  try {
    await OTP.findOneAndUpdate(
      { username: username },
      { otp: otp, expiresAt: otpExpiry },
      { upsert: true }
    );
  } catch (error) {
    console.log("Error saving OTP to database:", error);
    return res.status(500).json({ message: "Internal server error" });
  }

  // Send OTP to user's email
  sendOTPEmail(user.email, otp);

  res.json({ message: "OTP sent to your email" });
});

// Route to verify OTP
app.post("/verify-otp", async (req, res) => {
  const { username, otp } = req.body;

  // Check if OTP exists for the user in the database
  try {
    const storedOtpData = await OTP.findOne({ username: username });

    if (!storedOtpData) {
      return res.status(400).json({ message: "OTP not generated or expired" });
    }

    // Check if OTP is expired
    if (new Date() > new Date(storedOtpData.expiresAt)) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    // Verify OTP
    if (storedOtpData.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Clean up OTP after verification (optional)
    await OTP.deleteOne({ username: username });

    res.json({ message: "OTP correct" });
  } catch (error) {
    console.log("Error verifying OTP:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/register-event", (req, res) => {});

// Serve the home route
app.get("/", (req, res) => {
  res.send("Hey, how can I help you?");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
