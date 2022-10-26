import "./subtotal.scss";
import { Link } from "react-router-dom";

const Subtotal = ({ allProduct: total, allPrice: totalPrice }) => {
  return (
    <div className="subtotal">
      <p>
        <span>Subtotal({total} items) </span>:<strong> $ {totalPrice}</strong>
      </p>
      <button>
        <Link to="/payment">procesed to checkedout</Link>
      </button>
    </div>
  );
};

export default Subtotal;
