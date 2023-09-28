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

const itemCollectionRef = (user_id) => collection(db, `users/${user_id}/Baskt`);

export const getItems = (id) => async (dispatch) => {
  try {
    let data = [];
    const BasktRef = itemCollectionRef(id);
    await getDocs(BasktRef).then((docs) => {
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
    const BasktRef = itemCollectionRef(userID);
    const itemRef = doc(BasktRef, `${item.id}`);
    const snapDoc = await getDoc(itemRef);
    if (snapDoc.exists()) {
      UPDATE_ITEM_COUNT(userID, item.id, 1);
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
export const UPDATE_ITEM_COUNT = (userID, id, number) => async (dispatch) => {
  try {
    const BasktRef = itemCollectionRef(userID);
    const itemRef = doc(BasktRef, `${id}`);
    const snapDoc = await getDoc(itemRef);
    let object = snapDoc.data();

    let count = object.count + number;
    if (count > 0) {
      let updatedItem = { ...object, count };
      await updateDoc(itemRef, updatedItem).then(() => {
        dispatch({ type: "UPDATE_ITEM", payload: updatedItem });
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const REMOVE_ITEM = (userID, id) => async (dispatch) => {
  try {
    const BakstRef = itemCollectionRef(userID);
    const itemRef = doc(BakstRef, `${id}`);
    await deleteDoc(itemRef).then(() => {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    });
  } catch (error) {
    console.log(error.message);
  }
};
