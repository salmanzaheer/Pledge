import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const [move, setMove] = useState(false);

  function handleMove() {
    setMove((move) => !move);
  }

  let togglePanel = move ? " right-panel-active" : "";

  return (
    <div>
      <div class={`container${togglePanel}`} id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div class="social-container">
              <button onClick={signInWithGoogle} class="social">
                Sign up with Google
              </button>
            </div>
            <span>or use your email for registration</span>
            <input
              placeholder="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signUp}>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div class="social-container">
              <button onClick={signInWithGoogle} class="social">
                Sign in with Google
              </button>
            </div>
            <span>or use your account</span>
            <input
              placeholder="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/">Forgot your password?</Link>
            <button onClick={signUp}>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" onClick={handleMove} id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Don't have an account? Press the sign up button below</p>
              <button class="ghost" onClick={handleMove} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
