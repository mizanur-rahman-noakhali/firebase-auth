import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({})
      })
  }

  const handleGithubSignIn= () =>{
    signInWithPopup(auth, githubProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch( error =>{
      console.error ('error: ', error)
    })
  }
  const handleBlur=(event)=>{
    console.log(event.target.name,event.target.value)
    if(event.target.name ==="Email"){
     const isEmailValid=/\S+@\S+\.\S+/.test(event.target.value);
    console.log(isEmailValid);
    }
    if(event.target.name==="password"){
      const isPasswordValid=event.target.value.length >6;
      console.log(isPasswordValid);
    }
     
  }
  const handleSubmit=()=>{

  }

  return (
    <div className="App">
      {/* condition ? true: false */}

      {
        user.uid ?
          <button onClick={handleSignOut}>Sign Out</button>
          :
          <>
            <button onClick={handleGoogleSignIn}>Google Sing In</button>
            <button onClick={handleGithubSignIn}>Github Sign IN</button>
          </>

      }
      {user.uid && <div>
        <h3>User name: {user.displayName}</h3>
        <p>Email address: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
      <form onSubmit={handleSubmit}>
      <h1>Our own Autentication</h1>
      <input type="text" name="Email" onBlur={handleBlur} placeholder='your Email Address'  required/>
      <br/>
      <input type="password" name="password" onBlur={handleBlur} placeholder='your password' required/>
      <br/>
      <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
