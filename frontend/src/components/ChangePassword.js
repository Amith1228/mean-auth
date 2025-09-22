import React, { useState } from "react";
import { changePassword } from "../services/api";

const ChangePassword = () => {
  const [form, setForm] = useState({ currentPassword: "", newPassword: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return setMsg("You must be logged in");

    try {
      const res = await changePassword(token, form);
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="currentPassword" type="password" placeholder="Current Password" onChange={handleChange} required />
      <input name="newPassword" type="password" placeholder="New Password" onChange={handleChange} required />
      <button type="submit">Change Password</button>
      <p>{msg}</p>
    </form>
  );
};

export default ChangePassword;
