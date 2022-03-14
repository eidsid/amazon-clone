import { doc, setDoc } from "firebase/firestore/lite";
import { db } from "../firbase";
export const getItems = () => {};
export const createItem = async (item) => {
  console.log(item);
  const BasktRef = doc(db, "baskt/fristman");
  await setDoc(BasktRef, item);
  // .getDocs(user?.uid)
  // .collections("orders")
  // .doc(paymentIntent.id)
  // .set({
  //   products: products,
  //   amount: paymentIntent.amount,
  //   created: paymentIntent.created,
  // });
};
// export const deleteItem = (id) => axios.delete(`${apiUrl}${id}`);
