import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase/app';
import  {GoogleAuthProvider} from 'firebase/auth';
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig)
function App() {
  const provider = new GoogleAuthProvider();
  return (
    <div className="App">
      <button>sign-in</button>
    </div>
  );
}

export default App;
