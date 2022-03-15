import { useParams } from "react-router-dom";
import { api } from "../../setup/api/Products";
import useFetch from "../../setup/FetchAPI/Fetchapi";
import LoopIcon from "@mui/icons-material/Loop";

import "./style.scss";
import { Email, Facebook, Pinterest, Twitter } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM } from "../../setup/actions/Baskt";
const ProdcutInfo = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  let products = useFetch(api);
  const product = products.filter((product) => product.id === Number(id))[0];

  const dispatch = useDispatch();
  const addToBaskt = () => {
    dispatch(ADD_ITEM(user.userID, product));
  };
  const buyfunc = () => {};
  return product ? (
    <div className="prod " id={product.id}>
      <div className="images">
        <div className="minImages">
          <img src={product.image} alt="lab image" />
          <img src={product.image} alt="lab image" />
          <img src={product.image} alt="lab image" />
        </div>
        <img src={product.image} alt="lab image" />
      </div>
      <div className="prod__info">
        <p className="prod__info__cat">Brand: {product.category} </p>
        <p className="prod__info__title"> {product.title} </p>
        <div className="prod__info__rating">
          <p> {"⭐".repeat(product.rating.rate)}</p>
          <p className="rateCount">{product.rating.count} rateting</p>
        </div>
        <hr />
        <div className="prod__info__delivery">
          <p className="price">
            <strong> $ {product.price} </strong>
            <small>All prices include VAT</small>
          </p>
          <div className="details">
            <div className="col">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-secure-transaction._CB414468582_.png"
                alt=" Cash on Delivery image"
              />
              <p>Cash on Delivery</p>
            </div>
            <div className="col">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB403797073_.png"
                alt="deliverd by amazon"
              />
              <p>Deliverd by Amazon</p>
            </div>
            <div className="col">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-cod._CB638858551_.png"
                alt=""
              />
              <p>Secure transaction</p>
            </div>
          </div>
        </div>
        <hr />
        <p className="prod__info__description">{product.description}</p>
      </div>
      <div className="prod__process">
        <div className="col socail">
          <Email />
          <Facebook />
          <Twitter />
          <Pinterest />
        </div>
        <div className="col">
          <h1>$ {product.price}</h1>
          <p className="favcolor">$ 5.00 delivery</p>
          <p className="orangecolor">Usually ships within 3 to 4 days.</p>
          <div className="btns">
            <button onClick={addToBaskt}> Add to Basket </button>
            <button onClick={buyfunc}> Buy Now</button>
          </div>
          <p>Sold by {product.category} and Delivered by Amazon.</p>
        </div>
      </div>
    </div>
  ) : (
    <LoopIcon className="loading" />
  );
};

export default ProdcutInfo;
