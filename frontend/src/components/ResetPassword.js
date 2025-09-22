import React, { useState } from "react";
import { resetPassword } from "../services/api";

const ResetPassword = () => {
  const [form, setForm] = useState({ email: "", otp: "", newPassword: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword(form);
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="otp" placeholder="OTP" onChange={handleChange} required />
      <input name="newPassword" type="password" placeholder="New Password" onChange={handleChange} required />
      <button type="submit">Reset Password</button>
      <p>{msg}</p>
    </form>
  );
};

export default ResetPassword;
