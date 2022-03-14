import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_dtbWA43Bu3TkSvX7AK1CpbjyjuAH0xw",
  authDomain: "clone-27335.firebaseapp.com",
  databaseURL: "https://clone-27335-default-rtdb.firebaseio.com/",
  projectId: "clone-27335",
  storageBucket: "clone-27335.appspot.com",
  messagingSenderId: "44504415463",
  appId: "1:44504415463:web:71a68a8b2a1b72a5b83642",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const createUser = createUserWithEmailAndPassword;
const loginUser = signInWithEmailAndPassword;
const logout = signOut;

export { auth, loginUser, createUser, logout, db };
