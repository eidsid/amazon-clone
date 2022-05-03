import { doc, setDoc, getDoc, collection } from "firebase/firestore/lite";
import { db } from "../../setup/firbase";
export const getUser = (id) => async (dispatch) => {
  const userinfoRef = doc(db, "users", `${id}/info/userDetails`);
  const userInfo = await getDoc(userinfoRef);
  dispatch({ type: "SET_USER", payload: { ...userInfo.data(), userID: id } });
};

export const createDBUser = (userDetails, id) => async (dispatch) => {
  const usersRef = collection(db, `users/${id}/info`);
  const userinfoRef = doc(usersRef, "userDetails");
  await setDoc(userinfoRef, userDetails);
  dispatch({ type: "SET_USER", payload: { ...userDetails, userID: id } });
};

export const Logout = () => async (dispatch) => {
  dispatch({ type: "LogOut" });
};
