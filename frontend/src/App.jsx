// import React from 'react'
import {auth, googleProvider} from './firebase.js'
import {signInWithPopup} from 'firebase/auth'

const App = () => {
  const handleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvider);
    console.log(data);
  }

  return (
    <div>
      <button onClick={handleLogin}>Hello Maan CLICK ME </button>

    </div>
  )
}

export default App

