import React, { useState } from "react";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import "./style.scss";
import { Link } from "react-router-dom";
const AccountDropdown = ({ signOut }) => {
  return (
    <div className="account-dropdown">
      <div className="account-dropdown-title">
        <span>Your Account</span>
        <ArrowDropDown className="icon" />
      </div>

      <div className="account-dropdown-menu">
        {" "}
        <div className="top">
          <Link to={"/login"} className="btn">
            <span> Sign in</span>
          </Link>
          <div className="register">
            New cusomer?
            <Link to={"/register"} className="startLink">
              Start here.
            </Link>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <ul className="left">
            <li>
              <Link to={"/account"}>Your Account</Link>
            </li>
            <li>
              <Link to={"/orders"}>Orders</Link>
            </li>
            <li>
              <Link to={"/"}>Recommendations</Link>
            </li>
            <li onClick={() => signOut()}>Sign Out</li>
          </ul>

          <div className="center"></div>

          <div className="right">
            <h3>Your Lists</h3>
            <p>Create a List</p>
            <p>Find a List or Registry</p>
          </div>
          <div className="account-dropdown-menu-layer"></div>
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
