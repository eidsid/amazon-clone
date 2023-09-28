import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { ArrowBack, ArrowDownward, ArrowUpward } from "@mui/icons-material";

const CheckOutProductDom = ({
  item: { id, title, count, price, image },
  removeItemfunc,
  updateCount,
}) => {
  return (
    <div id={id} className="CheckOutProductsDom">
      <div className="item">
        <div className="col">
          <Link to={`/info/${id}`} className="linke">
            <img src={image} alt=" image" className="image" />
          </Link>
          <div className="info">
            <p> {title} </p>
            <p>in stack</p>
            <p>Eligible for FREE delivery</p>
            <p>count {count} pieces</p>
            <div>
              <div className="btns">
                <button onClick={() => updateCount(-1, id)}>
                  <ArrowDownward />
                </button>
                <button onClick={() => updateCount(1, id)}>
                  <ArrowUpward />
                </button>
              </div>
              <button onClick={() => removeItemfunc(id)}>remove item</button>
            </div>
          </div>
        </div>
        <p className="price">
          <strong> $ {price * count} </strong>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default CheckOutProductDom;
