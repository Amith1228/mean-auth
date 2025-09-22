import React, { useState, useContext } from "react";
import { login } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      setMsg("Login successful!");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email or Phone" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      <p>{msg}</p>
      <button type="button" onClick={() => alert("Google login not implemented")}>Login with Google</button>
      <button type="button" onClick={() => alert("LinkedIn login not implemented")}>Login with LinkedIn</button>
    </form>
  );
};

export default LoginForm;
