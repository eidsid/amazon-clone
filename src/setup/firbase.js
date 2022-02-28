import { initializeApp } from "firebase/app";
import { Database } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_dtbWA43Bu3TkSvX7AK1CpbjyjuAH0xw",
  authDomain: "clone-27335.firebaseapp.com",
  projectId: "clone-27335",
  storageBucket: "clone-27335.appspot.com",
  messagingSenderId: "44504415463",
  appId: "1:44504415463:web:71a68a8b2a1b72a5b83642",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const createUser = createUserWithEmailAndPassword;
const loginUser = signInWithEmailAndPassword;
const logout = signOut;
const db = new Database();

export { auth, loginUser, createUser, logout, db };
