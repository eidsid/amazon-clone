/* eslint-disable no-restricted-globals */

import React, { useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "setup/firbase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

function DeleteUserAccount() {
  const user = auth.currentUser;
  const conformDelete = confirm("Are you sure you want to delete your account");
  if (conformDelete) user.delete();
}
const AccountSetting = () => {
  const User = useSelector((state) => state.user);
  console.log(User);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
      }
    });
  }, [dispatch]);

  return (
    <div className="account-page">
      <h1></h1>
      <p>Welcome to your Amazon account!</p>
      <div className="account-details">
        <p>Name: {User.name} </p>
        <p>Email: {User.email} </p>
      </div>
      <button className=" delete-button" onClick={() => DeleteUserAccount()}>
        Delete
      </button>
    </div>
  );
};

export default AccountSetting;
