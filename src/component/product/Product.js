import "./style.scss";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../setup/actions/Baskt";
const Prodcut = ({ title, image, price, rating }) => {
  const dispatch = useDispatch();
  const addToBaskt = () => {
    let item = { title, image, price, rating };
    dispatch(ADD_ITEM(item));
  };
  return (
    <div className="product">
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
