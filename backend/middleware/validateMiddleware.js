const { validateEmail, validatePassword, validatePhone } = require("../utils/validate");

const validateSignup = (req, res, next) => {
  const { email, password, phone, termsAccepted } = req.body;
  if (!validateEmail(email)) return res.status(400).json({ msg: "Invalid email" });
  if (!validatePassword(password)) return res.status(400).json({ msg: "Password too short" });
  if (!validatePhone(phone)) return res.status(400).json({ msg: "Invalid phone" });
  if (!termsAccepted) return res.status(400).json({ msg: "Terms not accepted" });
  next();
};

module.exports = { validateSignup };
