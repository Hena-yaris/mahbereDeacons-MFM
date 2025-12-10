// src/api/axiosAdmin.js
import axios from "axios";

const axiosAdmin = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "x-admin-key": import.meta.env.VITE_ADMIN_SECRET, // make sure this is correct
  },
});


export default axiosAdmin;
