import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./style.scss";
import axios from "axios";

const Payment = (props) => {
  const Baskt = useSelector((state) => state.Baskt);
  const [products, setproducts] = useState(Baskt);
  const [totalCost, settotalCost] = useState(0);
  const removeItem = (id) => {
    // console.log(id);
    setproducts((products) => products.filter((item) => item.id !== id));
    console.log(products);
  };

  useEffect(() => {
    let price = 0;
    products.forEach((item) => (price += item.price));
    settotalCost(price);
  }, [products]);

  const itemsDom = products.map((item, index) => {
    return (
      <div className="product" key={index}>
        <Link to={`/info/${item.id}`} className="linke">
          <img src={item.image} alt=" image" className="image" />
        </Link>
        <div className="info">
          <p> {item.title} </p>
          <p>in stack</p>
          <p>Eligible for FREE delivery</p>
          <button onClick={() => removeItem(item.id)}> remove item </button>
          <p className="price">
            <strong> $ {item.price} </strong>
          </p>
        </div>
      </div>
    );
  });

  const [Carderrors, setCarderrors] = useState("");
  const [disabled, setdisabled] = useState(true);
  const [processing, setprocessing] = useState("");
  const [succeeded, setsucceeded] = useState(false);
  const [clientSecret, setclientSecret] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const handelChange = (e) => {
    setCarderrors(e.error ? e.error.message : "");
    setdisabled(!e.empity & e.complete & (Carderrors === "") ? false : true);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setprocessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent= payment conformation
        setsucceeded(true);
        setprocessing(null);
        setCarderrors(null);
        Navigate("/orders");
      });
  };
  useEffect(() => {
    //  generate the epecial tripe secret which alows us to charge acustomer
    const getClientSecret = async () => {
      const response = await axios({
        mothed: "post",
        url: `/payment/create?total=${totalCost * 100}`,
      });
      setclientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [Baskt]);
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
            <p>{props.user.email ? props.user.email : ""}</p>
            <p>adress1</p>
            <p>adress2</p>
          </div>
        </div>
        <hr />
        <div className="productsSection">
          <span>Review items and delivery</span>
          <div className="products">{itemsDom}</div>
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
                    <span>Order Total: ${totalCost}</span>
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
