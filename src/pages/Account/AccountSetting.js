/* eslint-disable no-restricted-globals */
import React from "react";
import "./style.scss";
import { auth } from "setup/firbase";
import { useSelector } from "react-redux";
import useLoginRedirect from "hooks/useLoginRedirect";
import Loading from "component/loadingIcon/Loading";

function DeleteUserAccount() {
  const user = auth.currentUser;
  const conformDelete = confirm("Are you sure you want to delete your account");
  if (conformDelete) user.delete();
}

const AccountSetting = () => {
  const User = useSelector((state) => state.user);

  useLoginRedirect(User);

  return (
    <>
      {User ? (
        <div className="account-page">
          <h1></h1>
          <p>Welcome to your Amazon account!</p>
          <div className="account-details">
            <p>Name: {User?.name} </p>
            <p>Email: {User?.email} </p>
          </div>
          <button
            className=" delete-button"
            onClick={() => DeleteUserAccount()}
          >
            Delete
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default AccountSetting;
