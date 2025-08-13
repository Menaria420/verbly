import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://your-api-url.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for auth tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Or use cookies
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
