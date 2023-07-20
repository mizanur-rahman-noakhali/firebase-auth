import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
//import 'firebase/auth';
import {  getAuth, GoogleAuthProvider,  signInWithPopup } from "firebase/auth";
import app from './firebase.config';
import { useState } from 'react';
const auth = getAuth(app);
firebase.initializeApp(firebaseConfig)
function App() {
  const [user, setUser] = useState({})
  //const provider = new firebase.auth.GoogleAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  //const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn=()=>{
    
    signInWithPopup(auth,googleProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.error('error', error)
    })
  }

  return (
    <div className="App">
      <button onClick={handleSignIn}>sign-in</button>
    </div>
  );
}
export default App;
