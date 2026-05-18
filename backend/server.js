const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

//
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Basic Health Check Route
app.get("/", (req, res) => {
  res.send("Backend server is running smoothly!");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🚀 MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start Server
app.listen(PORT, () => {
  console.log(`📡 Server listening on port ${PORT}`);
});
