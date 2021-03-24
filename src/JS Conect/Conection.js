import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC-_xCSuMJjwinWVIVZgdk2k-Rz0Y_GBtc",
    authDomain: "know-firebase-c61b5.firebaseapp.com",
    projectId: "know-firebase-c61b5",
    storageBucket: "know-firebase-c61b5.appspot.com",
    messagingSenderId: "570160724834",
    appId: "1:570160724834:web:bcea57fcc9826a3fbc8a3b",
    measurementId: "G-Y3QSJPW9K3"
  };
  
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();