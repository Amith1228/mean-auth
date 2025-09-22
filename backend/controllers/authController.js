const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { sendOTPEmail } = require("../utils/sendOTPEmail");

// Signup
exports.signup = async (req, res) => {
  const { fullName, email, password, phone, termsAccepted } = req.body;
  if (!termsAccepted) return res.status(400).json({ msg: "Accept terms first" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ fullName, email, password: hashedPassword, phone, termsAccepted });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.status(201).json({ token, user });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.status(200).json({ token, user });
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  user.resetOTP = otp;
  user.resetOTPExpiry = Date.now() + 10 * 60 * 1000;
  await user.save();

  await sendOTPEmail(email, otp);
  res.json({ msg: "OTP sent to email" });
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });
  if (user.resetOTP !== otp || user.resetOTPExpiry < Date.now()) return res.status(400).json({ msg: "Invalid OTP" });

  user.password = await bcrypt.hash(newPassword, 10);
  user.resetOTP = null;
  user.resetOTPExpiry = null;
  await user.save();
  res.json({ msg: "Password reset successful" });
};
