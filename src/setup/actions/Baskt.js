import {
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  collection,
} from "firebase/firestore/lite";
import { db } from "../../setup/firbase";

export const getItems = (id) => async (dispatch) => {
  try {
    let data = [];
    const userinfoRef = collection(db, `users/${id}/Baskt`);
    await getDocs(userinfoRef).then((docs) => {
      docs.forEach((doc) => {
        data.push(doc.data());
      });
    });
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const ADD_ITEM = (userID, item) => async (dispatch) => {
  try {
    const BasktRef = collection(db, `users/${userID}/Baskt`);
    const userinfoRef = doc(BasktRef, `${item.id}`);
    setDoc(userinfoRef, item).then(() => {
      dispatch({ type: "ADD_ITEM", payload: item });
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const REMOVE_ITEM = (userID, id) => async (dispatch) => {
  try {
    console.log(id);
    const BakstRef = collection(db, `users/${userID}/Baskt`);
    const itemRef = doc(BakstRef, `${id}`);
    await deleteDoc(itemRef).then(() => {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    });
  } catch (error) {
    console.log(error.message);
  }
};
