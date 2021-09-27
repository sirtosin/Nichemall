import firebase from "firebase";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF8NHVnmVi4MOv08p85_G0iZQFYB1_1U0",
  authDomain: "nichemall.firebaseapp.com",
  projectId: "nichemall",
  storageBucket: "nichemall.appspot.com",
  messagingSenderId: "364493108993",
  appId: "1:364493108993:web:8882272f45bbdd12a68d00",
  measurementId: "G-NG2LM89PXK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
