import {app} from "../../config/firebase.js";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

export const Login = async (req, res) => {
  
  try{
   const token = req.body;
   const decoded = await getAuth(app).verifyIdToken(token);
   console.log(decoded);
   return res.json({decoded})
  }catch(err){
    return res.status(500).json({message:`Internal Server Error ${err.message}`});
  }
}