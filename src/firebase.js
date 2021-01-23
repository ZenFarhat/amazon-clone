import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATclHANY449wJMMCy2aM4qLSsgvDx8m88",
  authDomain: "challenge-f061e.firebaseapp.com",
  projectId: "challenge-f061e",
  storageBucket: "challenge-f061e.appspot.com",
  messagingSenderId: "451706597772",
  appId: "1:451706597772:web:afb6195f88b8859b2d66a9",
  measurementId: "G-QSLDB7D75W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
