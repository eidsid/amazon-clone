import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./setup/firbase";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { getItems } from "./setup/actions/Baskt";
import { getProducts } from "./setup/actions/Products";
import { getUser, Logout } from "./setup/actions/user";

import Header from "./component/header/Header";
import Home from "./component/home/Home";
import ProdcutInfo from "./component/ProductInfo/ProductInfo";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Checkout from "./component/checkout/Checkout";
import Payment from "./component/payment/Payment";
import Orders from "./component/orders/Orders";
import Footer from "./component/footer/Footer";
import Notifications from "./component/Notifications/Notifications";

const promise = loadStripe(
  "pk_test_51JwvitJSSyNgmcbH31X5qiVWlHICk0Uto3Vn1b0h4ij3u23qh35R71sr5VpJJlOhQDMex6uHoul7iRTh8LGwtSmy00Ynbl8eUH"
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.uid));
        dispatch(getItems(user.uid));
      } else {
        dispatch(Logout());
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Notifications />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="info/:id" element={<ProdcutInfo />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
