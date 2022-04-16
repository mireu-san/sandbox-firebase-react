import { useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut, 
} from "firebase/auth";
import './App.css';
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
  }



  return (
    <div className="App">
    
      <div className="signUp">
        <h3>Sign Up Page</h3>
        <input 
          placeholder="Enter your email" 
          onChange={(event) => setRegisterEmail(event.target.value)}
        />
        <input 
          placeholder="Enter your password" 
          onChange={(event) => { setRegisterPassword(event.target.value)}}
        />

        <button onClick={register}>Sign Up</button>
      </div>

      <div className="signIn">
        <h3>Sign In Page</h3>
        <input 
          placeholder="Enter your email"
          onChange={(event) => {
            setLoginEmail(event.target.value)
          }}
        />
        <input 
          placeholder="Enter your password"
          onChange={(event) => {
            setLoginPassword(event.target.value)
          }}
        />
        
        <button onclick={login}>Sign In</button>
      </div>

        <h4>User Logged In:</h4>
        {user?.email}
           
        <button onclick={logout}>
          Sign Out
        </button>
    </div>
    
  );
}

export default App;
