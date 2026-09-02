import { cert, initializeApp } from "firebase-admin/app";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

export const app = initializeApp({
  credential: cert(serviceAccount),
});
