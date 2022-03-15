import {
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  collection,
} from "firebase/firestore/lite";
import { db } from "../../setup/firbase";

export const createDBUser = (userDetails, id) => async (dispatch) => {
  const usersRef = collection(db, `users/${id}/info`);
  const userinfoRef = doc(usersRef, "userDetails");
  await setDoc(userinfoRef, userDetails);
};

export const getItems = (id) => async (dispatch) => {
  try {
    let data = [];
    const userinfoRef = collection(db, `users/${id}/Baskt`);
    await getDocs(userinfoRef).then((docs) => {
      docs.forEach((doc) => {
        data.push(doc.data());
      });
    });
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: "data" });
  } catch (error) {
    console.log(error.message);
  }
};
export const ADD_ITEM = (userID, item) => async (dispatch) => {
  try {
    const orderRef = collection(db, `users/${userID}/Baskt`);
    const userinfoRef = doc(orderRef, `${item.id}`);
    setDoc(userinfoRef, item).then(() => {
      dispatch({ type: "ADD_ITEM", payload: item });
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const REMOVE_ITEM = (id) => async (dispatch) => {
  try {
    // const { data } = api.createItem(item);
    console.log(id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
