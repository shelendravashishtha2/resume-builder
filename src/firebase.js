import firebase from "firebase/compat/app"
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR3bsBqhtotgwzWeW9OOLmVAv_1VgUPYs",
  authDomain: "resume-db4fe.firebaseapp.com",
  projectId: "resume-db4fe",
  storageBucket: "resume-db4fe.appspot.com",
  messagingSenderId: "488491148269",
  appId: "1:488491148269:web:22e462a489415d77367de4",
  measurementId: "G-NB1PJ14VZ2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();