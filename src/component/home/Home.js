import Prodcut from "../product/Product";
import "./style.scss";

import products from "../../setup/Productsdb/products";
const Home = () => {
  const items = products("https://fakestoreapi.com/products");

  let productsDom = items.map((item) => {
    return <Prodcut {...item} key={item.id} />;
  });
  return (
    <div className="home">
      {" "}
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61Bu4h-VnJL._SX3000_.jpg"
        alt="home image"
      />
      <div className="home__container">
        <div className="home__container__row">{productsDom}</div>
      </div>
    </div>
  );
};
export default Home;
