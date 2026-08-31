// import React from 'react'
import {auth, googleProvider} from '../firebase.js'
import {signInWithPopup} from 'firebase/auth'

const App = () => {
  const handleLogin = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken();
    const data = await login(token);
    console.log(data)
  };

  return (
    <div>
      <button onClick={handleLogin}>Hello Maan CLICK ME </button>

    </div>
  )
}

export default App

