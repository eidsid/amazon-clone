import { Link } from "react-router-dom";
import { ADD_ITEM } from "../../setup/actions/Baskt";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
  };
  const [randomNum, setRandomNum] = useState(1);

  useEffect(() => {
    const renadomNum = Math.floor(Math.random() * 4);
    setRandomNum(renadomNum);
  }, [description]);

  return (
    <div className={`product anim${randomNum === 0 ? 1 : randomNum}`} id={id}>
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
