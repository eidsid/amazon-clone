import { Link } from "react-router-dom";
import "./style.scss";
const OrdersProducts = (props) => {
  let productsDom = props.products.map((item, index) => {
    return (
      <div className="item" key={index}>
        <Link to={`/info/${item.id}`} className="linke">
          <img src={item.image} alt="image" className="image" />
        </Link>
        <div className="info">
          <p> {item.title} </p>
          <p>orderd</p>
          <p className="price">
            <strong> $ {item.price} </strong>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="orders">
      <div className="info">
        <div className="col">
          <div>
            <strong>order</strong>
          </div>
          <div>
            <small>paymentID: {props.id}</small>
          </div>
        </div>
        <div className="col">
          <div>{props.date}</div>
          <div>
            <strong>Total ${props.amount}</strong>
          </div>
        </div>
      </div>
      <div className="products">{productsDom}</div>
    </div>
  );
};

export default OrdersProducts;
