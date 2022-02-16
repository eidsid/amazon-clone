import { useSelector } from "react-redux";
import Prodcut from "../product/Product";
import "./style.scss";
const Home = () => {
  const items = useSelector((state) => state.Baskt);
  console.log(items);
  let product1 = {
    title: "prodct1",
    image: " https://m.media-amazon.com/images/I/61s6UawAo5L._AC_SL1500_.jpg",
    price: 50,
    rating: 5,
  };
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
          <Prodcut {...product1} />
          <Prodcut {...product1} />
        </div>
        <div className="home__container__row">
          {" "}
          <Prodcut {...product1} />
          <Prodcut {...product1} />
          <Prodcut {...product1} />
        </div>
        <div className="home__container__row"></div>
      </div>
    </div>
  );
};
export default Home;
