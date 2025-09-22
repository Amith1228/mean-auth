import React, { useState } from "react";
import { signup } from "../services/api";
import { validateEmail, validatePassword, validatePhone } from "../utils/validate";

const SignupForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    profileImage: "",
    country: "",
    state: "",
    city: "",
    dob: "",
    interests: [],
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) return setMsg("Invalid email");
    if (!validatePassword(form.password)) return setMsg("Password too short");
    if (!validatePhone(form.phone)) return setMsg("Invalid phone number");
    if (!form.termsAccepted) return setMsg("Accept terms first");

    try {
      setLoading(true);
      const res = await signup(form);
      setMsg("Signup successful!");
      console.log(res.data);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="phone" placeholder="Phone (+91...)" onChange={handleChange} required />
      <input name="profileImage" placeholder="Profile Image URL" onChange={handleChange} />
      <input name="country" placeholder="Country" onChange={handleChange} />
      <input name="state" placeholder="State" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />
      <input name="dob" type="date" onChange={handleChange} />
      <input name="interests" placeholder="Interests (comma separated)" onChange={handleChange} />
      <label>
        <input name="termsAccepted" type="checkbox" onChange={handleChange} /> Accept Terms
      </label>
      <button type="submit" disabled={loading}>Signup</button>
      {msg && <p>{msg}</p>}
    </form>
  );
};

export default SignupForm;
