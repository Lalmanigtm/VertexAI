import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ message: "Auth service is running" });
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Auth service is running on port ${PORT}`);
})