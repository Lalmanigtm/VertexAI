import { auth, googleProvider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";

const App = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const token = await result.user.getIdToken();

      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default App;