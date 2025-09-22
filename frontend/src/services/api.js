import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const signup = (data) => axios.post(`${API_URL}/auth/signup`, data);
export const login = (data) => axios.post(`${API_URL}/auth/login`, data);
export const forgotPassword = (data) => axios.post(`${API_URL}/auth/forgot-password`, data);
export const resetPassword = (data) => axios.post(`${API_URL}/auth/reset-password`, data);
export const changePassword = (token, data) =>
  axios.post(`${API_URL}/auth/change-password`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const getUserProfile = (token) =>
  axios.get(`${API_URL}/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
