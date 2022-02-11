import logo from "./Logo.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import "./header.scss";
import Subheader from "./sub_header/Subheader";
import Subtitles from "./subtitles/Subtitles";

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Amazon-logo" className="logo" />
        <div className="header__search">
          <input type="text" className="header__search__Input" />
          <SearchIcon className="header__search__Icon" />
        </div>
        <div className="header__nav">
          <div className="header__nav__item">
            <span>hello gust</span>
            <span>Sign In</span>
          </div>
          <div className="header__nav__item">
            <span>hello gust</span>
            <span>Sign In</span>
          </div>
          <div className="header__nav__item">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
          <div className="header__nav__item">
            <span>Your</span>
            <span>Prime</span>
          </div>
          <div className="header__nav__item">
            <ShoppingBasketIcon className="__icon" />
            <span id="shoppingCount">0</span>
          </div>
        </div>
      </header>{" "}
      <Subheader />
      <Subtitles />
    </>
  );
};

export default Header;
