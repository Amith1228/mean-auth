export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const validatePassword = (password) => password.length >= 6;
export const validatePhone = (phone) => /^\+\d{10,15}$/.test(phone);
