import logo from "./Logo.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import "./header.scss";
import Subheader from "./sub_header/Subheader";
import Subtitles from "./subtitles/Subtitles";
import { Link } from "react-router-dom";
import products from "../../setup/Productsdb/products";
import { useState } from "react";
const Header = () => {
  let titles = products("https://fakestoreapi.com/products/categories");

  const [subtitles, setsubtitles] = useState([]);
  const [subtitleslike, setsubtitleslike] = useState([]);
  let filterProducts = (title) => {
    add_subtitles(title);
  };
  let add_subtitles = (title) => {
    if (!subtitleslike.includes(title)) {
      setsubtitleslike((titles) => [...titles, title]);
      // setsubtitlesDom();
      setsubtitles();
    }
  };
  let setsubtitlesDom = () => {
    return <Subtitles titles={subtitleslike} filterProducts={filterProducts} />;
  };

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="header__search">
          <input type="text" className="header__search__Input" />
          <SearchIcon className="header__search__Icon" />
        </div>
        <div className="header__nav">
          <div className="header__nav__item">
            <span>hello gust</span>
            <span>Sign In</span>
          </div>
          <div className="header__nav__item">
            <span>hello gust</span>
            <span>Sign In</span>
          </div>
          <div className="header__nav__item">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
          <div className="header__nav__item">
            <span>Your</span>
            <span>Prime</span>
          </div>{" "}
          <Link to="/checkout" className="link">
            <div className="header__nav__item">
              <ShoppingBasketIcon className="__icon" />
              <span id="shoppingCount">0</span>
            </div>
          </Link>
        </div>
      </header>{" "}
      <Subheader titles={titles} filterProducts={filterProducts} />
      {setsubtitlesDom}
    </>
  );
};

export default Header;
