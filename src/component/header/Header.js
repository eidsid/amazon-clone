import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./header.scss";

import logo from "./Logo.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";

import Subheader from "./sub_header/Subheader";
import Subtitles from "./subtitles/Subtitles";
import SiderHeader from "./sidheader/SideHeader";

import useFetch from "../../setup/FetchAPI/Fetchapi";

import {
  FilterProductsSearch,
  FilterProductsCat,
  FilterProductsPrice,
} from "../../setup/actions/Products";
const Header = (props) => {
  console.log(props.user);
  let titles = useFetch("https://fakestoreapi.com/products/categories");

  const [subtitles, setsubtitles] = useState(["ALLProducts"]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let filterProducts = (value) => {
    if (isNaN(value)) {
      dispatch(FilterProductsCat(value));
      add_subtitles(value);
    } else {
      dispatch(FilterProductsPrice(value));
    }

    navigate("/");
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
  const [showsideHeader, setshowsideHeader] = useState(false);
  let showSideHeaderfun = () => {
    setshowsideHeader(!showsideHeader);
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
          <Link to="/login" className="header__nav__item">
            <span>hello gust</span>
            <span>Sign In</span>
          </Link>
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
      <Subheader
        titles={titles}
        filterProducts={filterProducts}
        showSideHeaderfun={showSideHeaderfun}
      />
      {setsubtitlesDom}
      <SiderHeader
        titles={titles}
        filterProducts={filterProducts}
        showsideHeader={showsideHeader}
        showSideHeaderfun={showSideHeaderfun}
      />
    </>
  );
};

export default Header;
