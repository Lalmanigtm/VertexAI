import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import proxy from "express-http-proxy";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", proxy(process.env.AUTH_SERVICE));

app.get("/", (req, res) => {
  // res.send("Gateway is running"); 
  res.json({ message: "Gateway is running" });
});

app.listen(port, () => {
  console.log(`Gateway is running on port ${port}`);
});