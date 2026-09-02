// import { app } from "../../config/firebase.js";
import { app } from "../../../config/firebase.js";
import { getAuth } from "firebase-admin/auth"; // ← Admin-SDK, nicht firebase/auth!
import User from "../../models/user.model.js";

export const Login = async (req, res) => {
  try {
    const { token } = req.body; // ← token muss aus req.body kommen

    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    const decoded = await getAuth(app).verifyIdToken(token);
    console.log(decoded);

    const user = await  User.findOne({
      firebaseId: decoded.uid,
    })

    if(!user){
      user = await  User.create({
        firebaseId: decoded.uid,
        name: decoded.name,
        email: decoded.email, 
        avatar: decoded.picture
      })
    }

    return res.json({ decoded });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};
