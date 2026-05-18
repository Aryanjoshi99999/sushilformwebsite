const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST Endpoint: http://localhost:5000/api/users/submit
router.post("/submit", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    // Clean confirmation log inside your terminal
    console.log(
      `✨ New Aspirant Registered: ${newUser.name} from ${newUser.state}`,
    );

    res.status(201).json({ success: true, message: "Registration saved!" });
  } catch (error) {
    console.error("❌ Form submission error:", error.message);
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
