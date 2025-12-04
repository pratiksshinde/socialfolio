import axios from "axios";

const Instance = axios.create({
  baseURL: "https://social-folio-backend-api.onrender.com/api",
  timeout: 1000000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default Instance;    