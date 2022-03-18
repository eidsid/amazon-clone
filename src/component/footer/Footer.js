import "./style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <a href="#" aria-label="Back-to-top" className="Back-to-top">
        <div className="BackToTop">
          <span className="BackToTopText">Back to top</span>
        </div>
      </a>
      <div className="footer__Nav">
        <div className="col">
          <div className="title">Get to know us</div>
          <ul>
            <li>About Amazon</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="col">
          <div className="title">Shop with Us</div>
          <ul>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Your Orders</li>
            <li>Your Addresses</li>
            <li>Your Lists</li>
          </ul>
        </div>
        <div className="col">
          <div className="title">Make Money with Us</div>
          <ul>
            <li>Sell on Amazon</li>
            <li>Fulfillment by Amazon</li>
          </ul>
        </div>
        <div className="col">
          <div className="title">Let Us Help You</div>
          <ul>
            <li>Shipping & Delivery</li>
            <li>Help</li>
            <li>Returns & Replacements</li>
            <li>Amazon App Download</li>
          </ul>
        </div>
      </div>
      <div className="copy">
        Conditions of Use & SalePrivacy NoticeInterest-Based ©2022,
        Amazon-clone, Inc. or its affiliates
      </div>
    </div>
  );
};

export default Footer;
