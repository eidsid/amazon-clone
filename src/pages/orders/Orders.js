import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "setup/actions/orders";
import Loading from "../../component/loadingIcon/Loading";
import OrdersProducts from "../../component/ordersProducts/OrdersProducts";
import "./style.scss";
import useLoginRedirect from "hooks/useLoginRedirect";
const Orders = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  if (user) {
    const getOrdersfunc = async () => {
      let orders = await getOrders(user.userID);
      setOrders(orders);
    };
    getOrdersfunc();
  }
  useLoginRedirect(user);

  return (
    <div className="ordersContainer">
      <h1> Orders</h1>
      {orders.length ? (
        orders.map((order) => {
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
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Orders;
