import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../../setup/actions/orders";
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
      <div key={order.paymentID}>
        <p>{order.paymentID}</p>
        <p>{date.toLocaleDateString()}</p>
      </div>
    );
  });

  return (
    <div className="container0">
      <h1>this is container of Orders</h1>
      {ordersDom}
    </div>
  );
};

export default Orders;
