import { getAllCost } from "hooks/CalcTotalCost";
import "./subtotal.scss";
import { Link } from "react-router-dom";

const Subtotal = ({ BasktItems }) => {
  return (
    <div className="subtotal">
      <p>
        <span>Subtotal({BasktItems.length} items) </span>:
        <strong> $ {Math.floor(getAllCost(BasktItems))}</strong>
      </p>
      <button>
        <Link to="/payment">procesed to checkedout</Link>
      </button>
    </div>
  );
};

export default Subtotal;
