import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Checkout from "./component/checkout/Checkout";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getItems } from "./setup/actions/Baskt";
import { getProducts } from "./setup/actions/Products";
import ProdcutInfo from "./component/ProductInfo/ProductInfo";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./setup/firbase";
import Payment from "./component/payment/Payment";
function App() {
  const [userInfo, setuserInfo] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getProducts());
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuserInfo(user);
      } else {
        setuserInfo();
      }
    });
  }, [dispatch, userInfo]);

  return (
    <BrowserRouter>
      <Header user={userInfo} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login user={userInfo} />} />
        <Route exact path="/register" element={<Register user={userInfo} />} />
        <Route path="checkout" element={<Checkout user={userInfo} />} />
        <Route path="info/:id" element={<ProdcutInfo />} />
        <Route path="/payment" element={<Payment user={userInfo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
