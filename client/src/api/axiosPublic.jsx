import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API,
});


export default axiosPublic;