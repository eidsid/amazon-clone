import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./header.scss";

import logo from "./Logo.png";

import ShoppingCart from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import Subheader from "./sub_header/Subheader";
import SiderHeader from "./sidheader/SideHeader";

import useFetch from "setup/FetchAPI/Fetchapi";

import {
  FilterProductsSearch,
  FilterProductsCat,
  FilterProductsPrice,
} from "setup/actions/Products";
import { logout, auth } from "setup/firbase";
import AccountDropdown from "./AccountDropdown/AccountDropdown";

const Header = () => {
  let titles = useFetch("https://fakestoreapi.com/products/categories");
  const BasktItems = useSelector((state) => state.Baskt);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let filterProducts = (value) => {
    if (isNaN(value)) {
      dispatch(FilterProductsCat(value));
    } else {
      dispatch(FilterProductsPrice(value));
    }

    navigate("/");
  };

  let handelSearchChange = (e) => {
    dispatch(FilterProductsSearch(e.target.value));
  };
  const [showsideHeader, setshowsideHeader] = useState(false);
  let showSideHeaderfun = () => {
    setshowsideHeader(!showsideHeader);
  };
  const handelSignout = async () => {
    await logout(auth);
  };

  return (
    <>
      <header className="header">
        <div className="top">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <div className="search">
            <input
              type="text"
              className="Input"
              onChange={handelSearchChange}
            />
            <SearchIcon className="Icon" />
          </div>
        </div>
        <div className="nav">
          <div className="nav__item">
            {!user ? (
              <Link to="/login" className="item">
                <span>hello,</span>
                <span>Sign In</span>
              </Link>
            ) : (
              <span>hello , {user.name}</span>
            )}

            <AccountDropdown signOut={handelSignout} user={user} />
          </div>
          <Link to="/orders" className="item ">
            <span>Returns</span>
            <span>& Orders</span>
          </Link>
          <div className="item not_allow lg">
            <span>Your</span>
            <span>Prime</span>
          </div>{" "}
          <Link to="/checkout" className="link">
            <div className="item">
              <ShoppingCart className="icon" />
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
