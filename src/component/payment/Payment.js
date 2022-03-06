import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./style.scss";

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

  const [Carderrors, setCarderrors] = useState(null);
  const [disabled, setdisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();
  const handelChange = (e) => {
    setdisabled(
      (Carderrors.length === 0) & (e.empity === false) ? true : false
    );
    console.log(e.error);
    setCarderrors(e.error.message);
  };

  const handelSubmit = (e) => {
    console.log(e);
  };

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
                </form>
                <p className="errors">
                  {Carderrors !== null ? Carderrors : <></>}
                </p>
              </div>
              <div className="order">
                <span>Order Total: ${totalCost}</span>
                <button disabled={disabled}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
