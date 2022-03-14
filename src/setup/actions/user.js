import { doc, setDoc, getDoc, collection } from "firebase/firestore/lite";
import { db } from "../../setup/firbase";

export const getUser = (id) => async (dispatch) => {
  console.log(id);
  const userRef = collection(db, `users`);
  getDoc(userRef).then((callref) => {
    console.log(callref);
  });

  // dispatch({ type: "SET_USER", payload: user });
};

export const createDBUser = (userDetails, id) => async (dispatch) => {
  const usersRef = doc(db, `users/${id}`);
  await setDoc(usersRef, userDetails);
  dispatch({ type: "SET_USER", payload: userDetails });
};

export const Logout = () => async (dispatch) => {
  dispatch({ type: "LogOut" });
};
