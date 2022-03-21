import { Link } from "react-router-dom";
import { ADD_ITEM } from "../../setup/actions/Baskt";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { AddNotifications } from "../../setup/actions/notification";
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
    dispatch(ADD_ITEM(user.userID, product));
    dispatch(AddNotifications("item add to Basket successful"));
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
