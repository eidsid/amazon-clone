import React, { useState } from "react";
import "./style.scss";
const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="account-dropdown">
      <button className="account-dropdown-button" onClick={toggleDropdown}>
        Your Account
      </button>
      {isOpen && (
        <div className="account-dropdown-menu">
          <ul>
            <li>Your Account</li>
            <li>Orders</li>
            <li>Order</li>
            <li>Sign Out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
