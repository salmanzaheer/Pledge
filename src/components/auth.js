import { auth, googleProvider, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setValue(email);
        localStorage.setItem("email", email);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          email: user.email,
          createdAt: new Date(),
        })
          .then(() => {
            console.log("User data successfully stored in Firestore");
            navigate("/profile");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { email, uid } = result.user;
      const userData = {
        email: email,
        createdAt: new Date(),
      };
      setValue(email);
      localStorage.setItem("email", email);
      const userDocRef = doc(db, "users", uid);
      await setDoc(userDocRef, userData);
      console.log("User data successfully stored in Firestore");
      navigate("/dashboard");
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
      {value ? (
        <Dashboard />
      ) : (
        <div className={`container${togglePanel}`} id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
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
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
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
              <button onClick={signIn}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" onClick={handleMove} id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Don't have an account? Press the sign up button below</p>
                <button class="ghost" onClick={handleMove} id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
