import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../../setup/actions/orders";
import OrdersProducts from "./ordersProducts/OrdersProducts";
import "./style.scss";
const Orders = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    let orders = await getOrders(user.userID);
    setOrders(orders);
  }, [getOrders]);

  let ordersDom = orders.map((order) => {
    let date = new Date(order.created);

    return (
      <div key={order.paymentID} className="order">
        <OrdersProducts
          products={order.products}
          id={order.paymentID}
          amount={order.Amount}
          date={date.toLocaleDateString()}
        />
      </div>
    );
  });

  return (
    <div className="ordersContainer">
      <h1> Orders</h1>
      {orders ? ordersDom : "No orders"}
    </div>
  );
};

export default Orders;
