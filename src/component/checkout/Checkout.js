import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { REMOVE_ITEM } from "../../setup/actions/Baskt";
import Prodcut from "../product/Product";
import Subtotal from "../subtotal/Subtotal";
import "./checkout.scss";
const Checkout = () => {
  const items = useSelector((state) => state.Baskt);

  let products = useSelector((state) => state.Products);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  if (!user) {
    navigate("/");
  }

  const [allPrice, setallPrice] = useState(0);

  const getAllPrice = () => {
    let price = 0;
    items.forEach((item) => (price += item.price));
    setallPrice(price);
  };
  const recomendedItems = products.map((item) => <Prodcut {...item} />);
  useEffect(() => {
    getAllPrice();
  }, [items]);

  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(REMOVE_ITEM(user.userID, id));
  };
  const itemsDom = items.map((item, index) => {
    console.log(item.price);
    return (
      <>
        <div className="item" key={index}>
          <div className="col">
            <Link to={`/info/${item.id}`} className="linke">
              <img src={item.image} alt=" image" className="image" />
            </Link>
            <div className="info">
              <p> {item.title} </p>
              <p>in stack</p>
              <p>Eligible for FREE delivery</p>
              <button onClick={() => removeItem(item.id)}> remove item </button>
            </div>
          </div>
          <p className="price">
            <strong> $ {item.price} </strong>
          </p>
        </div>
        <hr />
      </>
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
        {items.length ? recomendedItems : ""}
      </div>
    </div>
  );
};

export default Checkout;
