import React from "react";
import "./style.scss";

const AccountSetting = () => {
  return (
    <div className="account-page">
      <h1>Account Page</h1>
      <p>Welcome to your Amazon account!</p>
      <div className="account-details">
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        {/* Add more account details */}
      </div>
    </div>
  );
};

export default AccountSetting;
