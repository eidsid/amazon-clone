import "./style.scss";
const Prodcut = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__info__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__info__rating">{"⭐".repeat(rating)}</div>
        <img src={image} alt="lab image" className="product__info__image" />
      </div>
      <button>Add to Basket</button>
    </div>
  );
};

export default Prodcut;
