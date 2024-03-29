import Prodcut from "../../component/product/Product";
import "./style.scss";
import { useSelector } from "react-redux";

import Loading from "../../component/loadingIcon/Loading";

const Home = () => {
  let products = useSelector((state) => state.Products);

  let productsDom = products.map((item, index) => {
    return <Prodcut {...item} key={index} />;
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
        <div className="home__container__row">
          {products.length ? productsDom : <Loading />}
        </div>
      </div>
    </div>
  );
};
export default Home;
