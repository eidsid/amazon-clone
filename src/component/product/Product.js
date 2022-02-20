import { Link } from "react-router-dom";
import "./style.scss";
const Prodcut = ({
  id,
  title,
  image,
  price,
  rating,
  description,
  category,
}) => {
  const addToBaskt = () => {};
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
