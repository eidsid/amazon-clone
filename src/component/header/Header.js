import logo from "./Logo.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import "./header.scss";
import Subheader from "./sub_header/Subheader";
import Subtitles from "./subtitles/Subtitles";
import { Link } from "react-router-dom";
import useFetch from "../../setup/FetchAPI/Fetchapi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FilterProductsSearch,
  FilterProductsCat,
} from "../../setup/actions/Products";
const Header = () => {
  let titles = useFetch("https://fakestoreapi.com/products/categories");

  const [subtitles, setsubtitles] = useState(["ALL"]);
  const dispatch = useDispatch();
  let filterProducts = (title) => {
    dispatch(FilterProductsCat(title));
    add_subtitles(title);
  };

  let add_subtitles = (title) => {
    if (!subtitles.includes(title)) {
      setsubtitles((titles) => [...titles, title]);
    }
  };

  let setsubtitlesDom = (
    <Subtitles titles={subtitles} filterProducts={filterProducts} />
  );

  let handelSearchChange = (e) => {
    dispatch(FilterProductsSearch(e.target.value));
  };

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="header__search">
          <input
            type="text"
            className="header__search__Input"
            onChange={handelSearchChange}
          />
          <SearchIcon className="header__search__Icon" />
        </div>
        <div className="header__nav">
          <div className="header__nav__item">
            <span>hello gust</span>
            <span>Sign In</span>
          </div>
          <div className="header__nav__item not_allow">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
          <div className="header__nav__item not_allow">
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
