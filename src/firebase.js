import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDuWrThCtDs5GYOXpHPO5BhAl-7Bj02d2A",
    authDomain: "tbl-usuarios7.firebaseapp.com",
    projectId: "tbl-usuarios7",
    storageBucket: "tbl-usuarios7.appspot.com",
    messagingSenderId: "854651094648",
    appId: "1:854651094648:web:cb6d8e3d7ba63f5af48f8d",
    measurementId: "G-KVYBYNBR96"
  };
  
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db=fb.firestore();