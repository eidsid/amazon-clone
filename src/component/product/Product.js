import { Link } from "react-router-dom";
import { ADD_ITEM } from "../../setup/actions/Baskt";
import "./style.scss";
import { useDispatch } from "react-redux";

const Prodcut = ({
  id,
  title,
  image,
  price,
  rating,
  description,
  category,
}) => {
  const dispatch = useDispatch();
  const addToBaskt = () => {
    console.log("item add");
    dispatch(
      ADD_ITEM({ id, title, image, price, rating, description, category })
    );
  };
  return (
    <div className="product" id={id}>
      <Link to={`info/${id}`} className="linke">
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
