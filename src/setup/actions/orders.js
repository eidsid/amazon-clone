import { doc, setDoc, getDocs, collection } from "firebase/firestore/lite";
import { db } from "../../setup/firbase";

export const getOrders = async (id) => {
  try {
    let data = [];
    const userinfoRef = collection(db, `users/${id}/Orders`);
    await getDocs(userinfoRef).then((docs) => {
      docs.forEach((doc) => {
        data.push(doc.data());
      });
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const AddOrder = async (userID, order) => {
  try {
    const BasktRef = collection(db, `users/${userID}/Orders`);
    const userinfoRef = doc(BasktRef, `${order.paymentID}`);
    await setDoc(userinfoRef, order);
  } catch (error) {
    console.log(error.message);
  }
};
