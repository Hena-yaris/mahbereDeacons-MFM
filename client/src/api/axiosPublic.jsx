import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/api", // all requests will start from /api/admin
});

export default axiosPublic