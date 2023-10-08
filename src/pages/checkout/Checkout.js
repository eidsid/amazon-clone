import { useDispatch, useSelector } from "react-redux";
import { AddNotifications } from "setup/actions/notification";
import Subtotal from "../../component/subtotal/Subtotal";
import "./checkout.scss";
import CheckOutProductDom from "../../component/checkOutproductDom/CheckOutProductDom";
import { REMOVE_ITEM, UPDATE_ITEM_COUNT } from "setup/actions/Baskt";
import useLoginRedirect from "hooks/useLoginRedirect";

const Checkout = () => {
  const BasktItems = useSelector((state) => state.Baskt);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const removeItemfunc = (ItemId) => {
    dispatch(
      AddNotifications({
        msg: "item removed from Basket successful",
        type: "success",
      })
    );
    dispatch(REMOVE_ITEM(user.userID, ItemId));
  };

  const updateCount = (number, ItemId) => {
    dispatch(UPDATE_ITEM_COUNT(user.userID, ItemId, number));
  };

  useLoginRedirect(user);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__left__adimg"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt="ad image"
        />
        <h2 className="checkout__left__title">Your shopping Basket</h2>

        {BasktItems.map((item) => {
          return (
            <CheckOutProductDom
              key={item.id}
              item={item}
              removeItemfunc={removeItemfunc}
              updateCount={updateCount}
            />
          );
        })}
      </div>
      <div className="checkout__right">
        <Subtotal BasktItems={BasktItems} user={user} />
      </div>
    </div>
  );
};

export default Checkout;
