// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB5NIphbIrHZiedutk6ozX6vjX9K4qDnvU",
    authDomain: "dbtest-85c32.firebaseapp.com",
    databaseURL: "https://dbtest-85c32-default-rtdb.firebaseio.com",
    projectId: "dbtest-85c32",
    storageBucket: "dbtest-85c32.appspot.com",
    messagingSenderId: "708625080375",
    appId: "1:708625080375:web:b9562bf309d98394441fb2"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
    
  export default db;