import "./checkout.scss";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__left__adimg"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt="ad image"
        />
        <h2 className="checkout__left__title" >Your shopping Basket</h2>
      </div>
      <div className="checkout__right">this is right section</div>
    </div>
  );
};

export default Checkout;
