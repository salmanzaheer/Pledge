import React, { useState } from 'react';
import { auth, googleProvider, db } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

//import './style.css';

export const Transactions = () => {
  const [to, setTo] = useState('');
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [installments, setInstallments] = useState('');
  const [note, setNote] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const db = getFirestore();
    try {
      const transactionRef = await addDoc(collection(db, "transactionRequests"), {
        to,
        product,
        amount,
        installments,
        note,
        user: user.uid
      });
      console.log("Transaction added with ID: ", transactionRef.id);
      navigate('/');
    } catch (e) {
      console.error("Error adding transaction: ", e);
    }
  };

  return (
    <div style={{ textAlign: 'center', background: 'linear-gradient(to right, green, white)' }}>
      <form onSubmit={handleSubmit}>
        <label style={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold', color: 'black' }}>
          To:
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        </label>
        <br/>
        <label style={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold', color: 'black' }}>
          Product:
          <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
        </label>
        <br />
        <label style={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold', color: 'black', backgroundColor: 'white' }}>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <br />
        <label style={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold', color: 'black' }}>
          Number of Installments:
          <input type="number" value={installments} onChange={(e) => setInstallments(e.target.value)} />
        </label>
        <br/>
        <label style={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold', color: 'black' }}>
          Notes:
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Transactions;
