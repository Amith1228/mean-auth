import React, { useState } from "react";
import { forgotPassword } from "../services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword({ email });
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Send OTP</button>
      <p>{msg}</p>
    </form>
  );
};

export default ForgotPassword;
