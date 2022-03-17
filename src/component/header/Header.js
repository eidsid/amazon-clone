import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./header.scss";

import logo from "./Logo.png";

import ShoppingCart from "@mui/icons-material/ShoppingCart";
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
import { logout, auth } from "../../setup/firbase";

const Header = (props) => {
  const user = useSelector((state) => state.user);

  console.log(user);
  let titles = useFetch("https://fakestoreapi.com/products/categories");
  const BasktItems = useSelector((state) => state.Baskt);
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
  const handelSignout = async () => {
    await logout(auth);
    console.log("loged out");
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
          {!user ? (
            <Link to="/login" className="header__nav__item">
              <span>hello gust</span>
              <span>Sign In</span>
            </Link>
          ) : (
            <div className="header__nav__item">
              <span>hello {user.name}</span>
              <span onClick={handelSignout}>logout</span>
            </div>
          )}
          <Link to="/orders" className="header__nav__item lg">
            <span>Returns</span>
            <span>& Orders</span>
          </Link>
          <div className="header__nav__item not_allow lg">
            <span>Your</span>
            <span>Prime</span>
          </div>{" "}
          <Link to="/checkout" className="link">
            <div className="header__nav__item">
              <ShoppingCart className="__icon" />
              <span>{BasktItems.length}</span>
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
        user={user ? user.name : user}
        handelSignout={handelSignout}
        titles={titles}
        filterProducts={filterProducts}
        showsideHeader={showsideHeader}
        showSideHeaderfun={showSideHeaderfun}
      />
    </>
  );
};

export default Header;
