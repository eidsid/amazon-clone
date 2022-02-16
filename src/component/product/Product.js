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
  const addToBaskt = () => {};
  return (
    <div className="product" id={id}>
      <div className="product__info">
        <p> {title} </p>{" "}
        <p className="product__info__price">
          <small> $ </small> <strong> {price} </strong>{" "}
        </p>{" "}
        <div className="product__info__rating"> {"⭐".repeat(rating)} </div>{" "}
        <img src={image} alt="lab image" className="product__info__image" />
      </div>{" "}
      <button onClick={addToBaskt}> Add to Basket </button>{" "}
    </div>
  );
};

export default Prodcut;
