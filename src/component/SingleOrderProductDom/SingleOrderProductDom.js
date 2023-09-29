import React from "react";
import { Link } from "react-router-dom";

const SingleOrderProductDom = ({ item }) => {
  return (
    <div className="item">
      <Link to={`/info/${item.id}`} className="linke">
        <img src={item.image} alt="image" className="image" />
      </Link>
      <div className="info">
        <p> {item.title} </p>
        <p>orderd</p>
        <p className="price">
          <strong> $ {Math.floor(item.price * item.count)} </strong>
        </p>
      </div>
    </div>
  );
};

export default SingleOrderProductDom;
