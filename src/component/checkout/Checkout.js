import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { REMOVE_ITEM } from "../../setup/actions/Baskt";
import { AddNotifications } from "../../setup/actions/notification";
import Prodcut from "../product/Product";
import Subtotal from "../subtotal/Subtotal";
import "./checkout.scss";
const Checkout = () => {
  const items = useSelector((state) => state.Baskt);

  let products = useSelector((state) => state.Products);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [allPrice, setallPrice] = useState(0);
  const dispatch = useDispatch();
  const getAllPrice = () => {
    let price = 0;
    items.forEach((item) => (price += item.price));
    setallPrice(price);
  };
  const recomendedItems = items.length
    ? products.map((item, index) => {
        if (item.category == items[0].category && items.length >= index + 1) {
          return <Prodcut {...item} key={item.id} />;
        }
      })
    : "";
  useEffect(() => {
    if (!user) {
      dispatch(
        AddNotifications({ msg: "you shoud login frist", type: "error" })
      );
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
    getAllPrice();
  }, [items]);

  const removeItem = (e, id) => {
    e.target.parentElement.parentElement.parentElement.parentElement.classList.add(
      "close"
    );

    setTimeout(() => {
      dispatch(
        AddNotifications({
          msg: "item removed from Basket successful",
          type: "success",
        })
      );
      dispatch(REMOVE_ITEM(user.userID, id));
    }, 1000);
  };
  const itemsDom = items.map((item) => {
    console.log(item.price);
    return (
      <div key={item.id} id={item.id}>
        <div className="item">
          <div className="col">
            <Link to={`/info/${item.id}`} className="linke">
              <img src={item.image} alt=" image" className="image" />
            </Link>
            <div className="info">
              <p> {item.title} </p>
              <p>in stack</p>
              <p>Eligible for FREE delivery</p>
              <button onClick={(e) => removeItem(e, item.id)}>
                {" "}
                remove item{" "}
              </button>
            </div>
          </div>
          <p className="price">
            <strong> $ {item.price} </strong>
          </p>
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__left__adimg"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt="ad image"
        />
        <h2 className="checkout__left__title">Your shopping Basket</h2>
        {items.length ? itemsDom : "no items"}
      </div>
      <div className="checkout__right">
        <Subtotal allPrice={allPrice} allProduct={items.length} />
        <div className="recomended">
          <h4>Recomended</h4>
          {items.length ? recomendedItems : ""}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
