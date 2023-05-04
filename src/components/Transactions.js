import React, { useState } from 'react';
import { auth, googleProvider, db } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

//import './style.css';

export const Transactions = () => {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Submission confirmed.');
  };

  return (
    <div style={{ textAlign: 'center', background: 'linear-gradient(to right, green, white)' }}>
      <form onSubmit={handleSubmit}>
        <label style={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold', color: 'black' }}>
          To:
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        </label>
        <br />
        <label style={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold', color: 'black', backgroundColor: 'white' }}>
          Amount:
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <br />
        <label style={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold', color: 'black' }}>
          Note:
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Transactions;
