import "./subtotal.scss";

const Subtotal = () => {
  let total = 0;
  let totalPrice = 0;
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
