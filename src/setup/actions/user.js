import { doc, setDoc, getDoc } from "firebase/firestore/lite";
import { db } from "../../setup/firbase";

export const getUser = (id) => async (dispatch) => {
  const user = doc(db, `users/${id}`);

  dispatch({ type: "GET_USER", payload: user });
};

export const setUser = (USER) => async (dispatch) => {
  dispatch({ type: "SET_USER", payload: USER });
};
