import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbeJLOGv3WimOoZMmIMJo_396vub7JJJU",
  authDomain: "pledge-412.firebaseapp.com",
  projectId: "pledge-412",
  storageBucket: "pledge-412.appspot.com",
  messagingSenderId: "53795986452",
  appId: "1:53795986452:web:919f1c31be7b93d4e3db01",
  measurementId: "G-4VCCB345XD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
