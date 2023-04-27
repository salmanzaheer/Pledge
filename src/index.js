import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbeJLOGv3WimOoZMmIMJo_396vub7JJJU",
  authDomain: "pledge-412.firebaseapp.com",
  databaseURL: "https://pledge-412-default-rtdb.firebaseio.com",
  projectId: "pledge-412",
  storageBucket: "pledge-412.appspot.com",
  messagingSenderId: "53795986452",
  appId: "1:53795986452:web:919f1c31be7b93d4e3db01",
  measurementId: "G-4VCCB345XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(name, email){

  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);

  set(reference, {
    username: name,
    email: email
  });
}

writeUserData("tosin", "ttosinidowu@gmail.com")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
