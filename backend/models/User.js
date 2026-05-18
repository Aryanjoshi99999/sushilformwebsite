const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    contactNo: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    neetAttemptNo: { type: Number, required: true },
    state: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
