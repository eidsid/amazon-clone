import SingleOrderProductDom from "component/SingleOrderProductDom/SingleOrderProductDom";
import "./style.scss";
const OrdersProducts = ({ adress, id, amount, date, products }) => {
  return (
    <div className="orders">
      <div className="info">
        <div className="col">
          <div>
            <strong>order</strong>
          </div>
          <div>
            <small>paymentID: {id}</small>
          </div>
        </div>
        <div className="col">
          <div>{date}</div>
          <div>
            <strong>Total ${amount}</strong>
            {adress && <span>deleverd to {adress}</span>}
          </div>
        </div>
      </div>
      <div className="products">
        {products.map((item, index) => {
          <SingleOrderProductDom item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OrdersProducts;
