import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Checkout from "./component/checkout/Checkout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getItems } from "./setup/actions/Baskt";
import { getProducts } from "./setup/actions/Products";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
