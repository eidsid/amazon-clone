import logo from "./Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <div className="header__searsh">
        <input type="text" className="header__searshInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__item">
          <span>hello gust</span>
          <span>Sign In</span>
        </div>
        <div className="header__item">
          <span>hello gust</span>
          <span>Sign In</span>
        </div>
        <div className="header__item">
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <div className="header__item">
          <span>Your</span>
          <span>Prime</span>
        </div>
        <div className="header__item" id="paskt">
          <span>Baskt</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
