import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // adjust if needed
});

API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('jobtracker-user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default API;
