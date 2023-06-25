import React from 'react';
import ReactDOM from 'react-dom/client';
import CartItem from './CartItem';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBO3Ajx0igOFvjznUv7R4TL2zs4x4_TFZ8",
    authDomain: "cart-5a2b6.firebaseapp.com",
    projectId: "cart-5a2b6",
    storageBucket: "cart-5a2b6.appspot.com",
    messagingSenderId: "819353597243",
    appId: "1:819353597243:web:6ed99a9c16c70145a0f31e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

