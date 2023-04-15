import '../public/css/App.css';
import '../public/css/index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcBf3Xmw7R0xiX0xfdccVonyBryoRIwIQ",
  authDomain: "pledge-33e41.firebaseapp.com",
  projectId: "pledge-33e41",
  storageBucket: "pledge-33e41.appspot.com",
  messagingSenderId: "473113502223",
  appId: "1:473113502223:web:d6317b4e0c9f032f53b97a",
  measurementId: "G-EWJVBQR3Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function myApp() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
      </header>
    </div>
  );
}

export default myApp;
