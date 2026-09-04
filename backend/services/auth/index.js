import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/auth.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Routes
app.use("/auth", router);

// Start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Auth service running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start Auth service:", error.message);
    process.exit(1);
  }
};

startServer();
