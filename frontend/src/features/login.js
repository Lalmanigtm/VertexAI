import { api } from "../utils/axios.js";

export const login = async (token) => {
  try {
    const response = await api.post("/login", {
      token,
    });

    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);

    throw error;
  }
};
