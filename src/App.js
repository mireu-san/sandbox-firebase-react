import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {

  }

  const logout = async () => {

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
        <button>Sign In</button>
      </div>

        <h4>User Logged In:</h4>
           
        <button>Sign Out</button>
    </div>
    
  );
}

export default App;
