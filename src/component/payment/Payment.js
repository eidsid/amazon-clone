import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./style.scss";
import axios from "axios";
import { AddOrder } from "../../setup/actions/orders";
import { AddNotifications } from "../../setup/actions/notification";

const Payment = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Baskt = useSelector((state) => state.Baskt);
  const [products, setproducts] = useState(Baskt);
  const [TotalCost, setTotalCost] = useState(null);
  const [timeoutId, settimeoutId] = useState(null);

  const removeItem = (e, id) => {
    e.target.parentElement.parentElement.classList.add("close");
    setTimeout(() => {
      dispatch(
        AddNotifications({ msg: "item removed success ", type: "success" })
      );
      setproducts((products) => products.filter((item) => item.id !== id));
    }, 700);
  };
  const itemsDom = products.map((item) => {
    return (
      <div className="product" key={item.id}>
        <Link to={`/info/${item.id}`} className="linke">
          <img src={item.image} alt="image" className="image" />
        </Link>
        <div className="info">
          <p> {item.title} </p>
          <p>{item.count} in stack</p>
          <p>Eligible for FREE delivery</p>
          <button onClick={(e) => removeItem(e, item.id)}> remove item </button>
          <p className="price">
            <strong> $ {item.price * item.count} </strong>
          </p>
        </div>
      </div>
    );
  });

  const [Carderrors, setCarderrors] = useState("");
  const [disabled, setdisabled] = useState(true);
  const [processing, setprocessing] = useState("");
  const [succeeded, setsucceeded] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const handelChange = (e) => {
    setCarderrors(e.error ? e.error.message : "");
    setdisabled(!e.empity & e.complete & !Carderrors ? false : true);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setprocessing(true);
    //  generate the epecial tripe secret which alows us to charge acustomer
    await axios
      .post("https://amazon-cloneweb.herokuapp.com/payments/create", {
        total: Math.floor(TotalCost * 1),
      })
      .then(async (data) => {
        await stripe
          .confirmCardPayment(data.data.clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          })
          .then(async ({ paymentIntent }) => {
            AddOrder(user.userID, {
              products,
              paymentID: paymentIntent.id,
              created: paymentIntent.created,
              Amount: paymentIntent.amount,
            });

            setsucceeded(true);
            setprocessing(null);
            setCarderrors(null);
            navigate("/orders");
          });
      });
  };

  useEffect(() => {
    if (!user) {
      let timeId = setTimeout(() => {
        dispatch(
          AddNotifications({ msg: "you shoud login frist", type: "error" })
        );
        navigate("/login");
      }, 2000);
      settimeoutId(timeId);
    } else {
      clearTimeout(timeoutId);
    }
    const editCost = () => {
      let price =
        products.length > 0
          ? products
              .map((item) => item.price * item.count)
              .reduce((p, c) => p + c)
          : 0;
      setTotalCost(Math.round(price));
    };
    editCost();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [products, TotalCost, user]);

  return (
    <>
      <div className="checkCount">
        <h1>
          Checkout ( <span>{products.length} items</span> )
        </h1>
      </div>
      <div className="paymentContainer">
        <div className="address__info">
          <span>Delivery Address</span>
          <div>
            <p>{user ? user.email : ""}</p>
            <p>adress1</p>
            <p>adress2</p>
          </div>
        </div>
        <hr />
        <div className="productsSection">
          <span>Review items and delivery</span>
          <div className="products">
            {products.length ? itemsDom : <h1>no items</h1>}
          </div>
        </div>
        <hr />
        <div className="paymentMothed">
          <span>paymentMothed</span>
          <div>
            <span>Card Details</span>
            <div>
              <div className="cardInfo">
                <form onSubmit={handelSubmit}>
                  <CardElement onChange={handelChange} />
                  <p className="errors">{Carderrors}</p>
                  <div className="order">
                    <span>Order Total: ${TotalCost}</span>
                    <button disabled={disabled || processing || succeeded}>
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                  </div>{" "}
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
