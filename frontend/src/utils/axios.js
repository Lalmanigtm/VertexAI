import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/auth`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
