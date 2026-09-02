import { app } from "../../config/firebase.js";
import { getAuth } from "firebase-admin/auth"; // ← Admin-SDK, nicht firebase/auth!

export const Login = async (req, res) => {
  try {
    const { token } = req.body; // ← token muss aus req.body kommen

    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    const decoded = await getAuth(app).verifyIdToken(token);
    console.log(decoded);

    return res.json({ decoded });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};
