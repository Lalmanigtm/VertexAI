import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ message: "Auth service is running" });
})

app.listen(PORT, () => {
  console.log(`Auth service is running on port ${PORT}`);
})