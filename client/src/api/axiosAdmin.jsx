import axios from "axios";

const axiosAdmin = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "x-admin-key": import.meta.env.VITE_ADMIN_SECRET,
  },
});

export default axiosAdmin;
