import SingleOrderProductDom from "component/SingleOrderProductDom/SingleOrderProductDom";
import "./style.scss";
const OrdersProducts = (props) => {
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
      <div className="products">
        {props.products.map((item, index) => {
          <SingleOrderProductDom item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OrdersProducts;
