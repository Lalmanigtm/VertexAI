import { app } from "../config/firebase.js";
import { getAuth } from "firebase-admin/auth";
import User from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        message: "Firebase ID token is required",
      });
    }

    const decodedToken = await getAuth(app).verifyIdToken(token);
    const { uid, name, email, picture } = decodedToken;

    let user = await User.findOne({
      firebaseUid: uid,
    });

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        name: name || "User",
        email,
        avatar: picture || "",
      });
    }

    return res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
