import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { AddNotifications } from "setup/actions/notification";
import { ADD_ITEM } from "setup/actions/Baskt";
const Prodcut = ({
  id,
  title,
  image,
  price,
  rating,
  description,
  category,
}) => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const addToBaskt = () => {
    let product = {
      id,
      title,
      image,
      price,
      rating,
      description,
      category,
    };
    if (!user) {
      dispatch(AddNotifications({ msg: "Please Login frist", type: "error" }));
    } else {
      dispatch(ADD_ITEM(user.userID, product));
      dispatch(
        AddNotifications({
          msg: "item add to Basket successful",
          type: "success",
        })
      );
    }
  };
  return (
    <div className="product anim" id={id}>
      <Link to={`/info/${id}`} className="linke">
        <div className="product__info">
          <p> {title} </p>
          <p className="product__info__price">
            <strong> $ {price} </strong>
          </p>
          <div className="product__info__rating">
            <p> {"⭐".repeat(rating.rate)}</p>
            <p>{rating.count} rateting</p>
          </div>
          <img src={image} alt="lab image" className="product__info__image" />
        </div>
      </Link>
      <button onClick={addToBaskt}> Add to Basket </button>
    </div>
  );
};

export default Prodcut;
