import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../setup/actions/orders";
import Loading from "../loadingIcon/Loading";
import OrdersProducts from "./ordersProducts/OrdersProducts";
import "./style.scss";
const Orders = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(async () => {
    if (user) {
      let orders = await getOrders(user.userID);
      setOrders(orders);
    } else {
      navigate("/login");
    }
  }, [getOrders, user]);

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
      {orders.length ? ordersDom : <Loading />}
    </div>
  );
};

export default Orders;
