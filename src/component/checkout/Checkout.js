import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_ITEM } from "../../setup/actions/Baskt";
import Subtotal from "../subtotal/Subtotal";
import "./checkout.scss";
const Checkout = () => {
  const items = useSelector((state) => state.Baskt);
  const [allPrice, setallPrice] = useState(0);

  const getAllPrice = () => {
    let price = 0;
    items.forEach((item) => (price += item.price));
    setallPrice(price);
  };

  useEffect(() => {
    getAllPrice();
  }, [items]);

  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(REMOVE_ITEM(id));
  };
  const itemsDom = items.map((item, index) => {
    console.log(item.price);
    return (
      <div className="product" key={index}>
        <Link to={`/info/${item.id}`} className="linke">
          <div className="product__info">
            <p> {item.title} </p>
            <p className="product__info__price">
              <strong> $ {item.price} </strong>
            </p>
            <div className="product__info__rating">
              <p> {"⭐".repeat(item.rating.rate)}</p>
              <p>{item.rating.count} rateting</p>
            </div>
            <img
              src={item.image}
              alt=" image"
              className="product__info__image"
            />
          </div>
        </Link>
        <button onClick={() => removeItem(item.id)}> remove item </button>
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
        {itemsDom}
      </div>
      <div className="checkout__right">
        <Subtotal allPrice={allPrice} allProduct={items.length} />
      </div>
    </div>
  );
};

export default Checkout;
