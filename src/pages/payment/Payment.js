import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { AddOrder } from "setup/actions/orders";
import { AddNotifications } from "setup/actions/notification";
import { getAllCost } from "hooks/CalcTotalCost";
import "./style.scss";
import useLoginRedirect from "hooks/useLoginRedirect";
import Loading from "component/loadingIcon/Loading";
import CountryList from "component/countryList/CountryList";

const Payment = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Baskt = useSelector((state) => state.Baskt);
  const [products, setProducts] = useState(Baskt);

  const removeItem = (e, id) => {
    e.target.parentElement.parentElement.classList.add("close");
    dispatch(
      AddNotifications({ msg: "item removed success ", type: "success" })
    );
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  };

  const itemsDom = products.map((item) => (
    <div className="product" key={item.id}>
      <Link to={`/info/${item.id}`} className="linke">
        <img src={item.image} alt="image" className="image" />
      </Link>
      <div className="info">
        <p>{item.title}</p>
        <p>{item.count} in stock</p>
        <p>Eligible for FREE delivery</p>
        <button onClick={(e) => removeItem(e, item.id)}>remove item</button>
        <p className="price">
          <strong>${item.price * item.count}</strong>
        </p>
      </div>
    </div>
  ));

  const [cardErrors, setCardErrors] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [Country, setCountry] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  let totalCost = getAllCost(products);

  const handleChange = (e) => {
    setCardErrors(e.error ? e.error.message : "");
    setDisabled(!e.empty && e.complete && !cardErrors ? false : true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const response = await axios.post(
        "https://amazone-clone-server.onrender.com/payments/create",
        {
          total: Math.floor(totalCost * 1),
        }
      );
      const { data } = response;

      const { clientSecret } = data;
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      AddOrder(user.userID, {
        products,
        paymentID: paymentIntent.id,
        created: paymentIntent.created,
        Amount: paymentIntent.amount,
        Country,
      });

      setSucceeded(true);
      setProcessing(null);
      setCardErrors(null);
      navigate("/orders");
    } catch (error) {
      console.log(error);
    }
  };

  useLoginRedirect(user);
  useEffect(() => {
    totalCost = getAllCost(products);
  }, [products.length]);

  useEffect(() => {
    setProducts(Baskt);
  }, [Baskt]);
  function CountryFun(value) {
    setCountry(value);
  }
  return (
    <>
      <div className="checkCount">
        <h1>
          Checkout (<span>{products.length} items</span>)
        </h1>
      </div>
      <div className="paymentContainer">
        <div className="address__info">
          <span>Delivery Address information</span>
          <p>Email: {user ? user.email : ""}</p>
          <h3>Country: {Country}</h3>
          Change Country <CountryList setCountryFun={CountryFun} />
        </div>
        <hr />
        <div className="productsSection">
          <span>Review items and delivery</span>
          <div className="products">
            {products.length ? itemsDom : <Loading />}
          </div>
        </div>
        <hr />
        <div className="paymentMethod">
          <span>Payment Method</span>
          <div>
            <span>Card Details</span>
            <div>
              <div className="cardInfo">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <p className="errors">{cardErrors}</p>
                  <div className="order">
                    <span>Order Total: ${totalCost}</span>
                    <button disabled={disabled || processing || succeeded}>
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
