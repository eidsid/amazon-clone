import "./subtotal.scss";

const Subtotal = (props) => {
  let total = props.allProduct;
  let totalPrice = props.allPrice;
  return (
    <div className="subtotal">
      <p>
        {" "}
        <span>Subtotal({total} items) </span>:<strong> $ {totalPrice}</strong>
      </p>
      <button>procesed to checkedout</button>
    </div>
  );
};

export default Subtotal;
