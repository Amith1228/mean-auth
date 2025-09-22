const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  profileImage: String,
  country: String,
  state: String,
  city: String,
  dob: Date,
  interests: [String],
  termsAccepted: { type: Boolean, required: true },
  googleId: String,
  linkedinId: String,
  resetOTP: String,
  resetOTPExpiry: Date,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
