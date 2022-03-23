import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection,
  updateDoc,
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
    const itemRef = doc(BasktRef, `${item.id}`);
    const snapDoc = await getDoc(itemRef);

    if (snapDoc.exists()) {
      let object = snapDoc.data();
      let count = object.count + 1;
      let updatedItem = { ...object, count };
      await updateDoc(itemRef, updatedItem).then(() => {
        dispatch({ type: "UPDATE_ITEM", payload: updatedItem });
      });
    } else {
      let newItem = { ...item, count: 1 };
      setDoc(itemRef, newItem).then(() => {
        dispatch({ type: "ADD_ITEM", payload: newItem });
      });
    }
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
