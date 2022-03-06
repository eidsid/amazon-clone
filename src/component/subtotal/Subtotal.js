import "./subtotal.scss";
import { Link } from "react-router-dom";
const Subtotal = (props) => {
  let total = props.allProduct;
  let totalPrice = props.allPrice;
  return (
    <div className="subtotal">
      <p>
        {" "}
        <span>Subtotal({total} items) </span>:<strong> $ {totalPrice}</strong>
      </p>
      <button>
        <Link to="/payment">procesed to checkedout</Link>
      </button>
    </div>
  );
};

export default Subtotal;
