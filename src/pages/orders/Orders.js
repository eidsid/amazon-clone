import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrders } from "setup/actions/orders";
import Loading from "../../component/loadingIcon/Loading";
import OrdersProducts from "../../component/ordersProducts/OrdersProducts";
import { AddNotifications } from "setup/actions/notification";
import "./style.scss";
const Orders = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

    if (user) {
    const  getOrdersfunc=async()=>{
      let orders = await getOrders(user.userID);
      setOrders(orders);
     }
     getOrdersfunc()
    } else {
        dispatch(AddNotifications({ msg: "you shoud login frist", type: "error" }));
        navigate("/login");
    }


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
