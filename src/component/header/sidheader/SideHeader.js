import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import "./style.scss";
import { Link } from "react-router-dom";

const SiderHeader = (props) => {
  let links = props.titles.map((title) => {
    return (
      <li
        className="links"
        onClick={() => props.filterProducts(title)}
        key={title}
      >
        {title}
      </li>
    );
  });

  let prices = [50, 100, 1000];
  let links_prices = prices.map((price) => {
    return (
      <li onClick={() => props.filterProducts(price)} key={price}>
        <span>Less than</span> {price}
      </li>
    );
  });

  return (
    <div
      className={`container ${props.showsideHeader ? "active" : "disActive"}`}
    >
      <div className="nav">
        {" "}
        <CloseIcon className="close" onClick={props.showSideHeaderfun} />
        <div className="account">
          <AccountCircleIcon sx={{ fontSize: 40 }} />
          <div className="heade_login">
            {!props.user ? (
              <Link to="/login" className="item">
                <span>hello gust</span>
                <span>Sign In</span>
              </Link>
            ) : (
              <div className="item">
                <span>hello {props.user.split(" ").slice(0, 1)}</span>
                <span onClick={props.handelSignout}>logout</span>
              </div>
            )}
          </div>
        </div>
        <ul className="list">
          <h2 className="title">Trending</h2>
          {links}
        </ul>
        <hr />
        <ul className="list">
          <h2 className="title">Shop by Category</h2>
          {links}
        </ul>
        <hr />
        <ul className="list">
          <h2 className="title">Shop by prices</h2>
          {links_prices}
        </ul>
        <hr />
        <ul className="list">
          <h2 className="title">Help & Settings </h2>
          <li>Your Account</li>
          <li className="lang">
            <LanguageIcon className="icon" /> English
          </li>
          <li>Help</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default SiderHeader;
