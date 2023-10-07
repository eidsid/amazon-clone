import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./setup/firbase";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { getItems } from "./setup/actions/Baskt";
import { getProducts } from "./setup/actions/Products";
import { getUser, Logout } from "./setup/actions/user";

import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import ProdcutInfo from "./pages/ProductInfo/ProductInfo";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Checkout from "./pages/checkout/Checkout";
import Payment from "./pages/payment/Payment";
import Orders from "./pages/orders/Orders";
import Footer from "./component/footer/Footer";
import Notifications from "./component/Notifications/Notifications";
import AccountSetting from "pages/Account/AccountSetting";

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

const RoutesData=[
  {path:"/"         ,Element:<Home />, Exact:true},
  {path:"/login"    ,Element:<Login />, Exact:true},
  {path:"/register" ,Element:<Register />, Exact:true},
  {path:"checkout"  ,Element:<Checkout />, Exact:false},
  {path:"info/:id"  ,Element:<ProdcutInfo />, Exact:false},
  {path:"/payment"  ,Element:<Elements stripe={promise}><Payment /></Elements>, Exact:true},
  {path:"/orders"   ,Element:<Orders />, Exact:true},
  {path:"/account"  ,Element:<AccountSetting />, Exact:true},

]
  
return (
    <BrowserRouter>
      <Header />
      <Notifications />
      <Routes>
       {RoutesData.map(({path,Element,Exact},index)=>{
         return <Route path={path} element={Element}  exact={Exact} key={index}/>
       })}
   
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
