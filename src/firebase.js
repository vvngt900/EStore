import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdk1Rjs7r6ZEPickgbkNeW1NHr25kaZ_4",
    authDomain: "estore-5fb9b.firebaseapp.com",
    projectId: "estore-5fb9b",
    storageBucket: "estore-5fb9b.appspot.com",
    messagingSenderId: "1067600590802",
    appId: "1:1067600590802:web:9cd69f021183ab22c73a0b",
    measurementId: "G-CYKRK2J99K"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };