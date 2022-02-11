import "./subheader.scss";
import RocketIcon from "@mui/icons-material/Rocket";
import Menu from "@mui/icons-material/Menu";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

const Subheader = () => {
  return (
    <header className="sub-header">
      <div className="bars">
        <Menu />
        all
      </div>
      <div className="sub-header__nav">
        <div className="sub-header__nav__item">Todays Deals</div>
        <div className="sub-header__nav__item">Sell</div>
        <div className="sub-header__nav__item">Help</div>
        <div className="sub-header__nav__item">Fashoin</div>
        <div className="sub-header__nav__item">Grocery</div>
        <div className="sub-header__nav__item">Perfums</div>
        <div className="sub-header__nav__item">Mobile Phones</div>
        <div className="sub-header__nav__item">Home</div>
        <div className="sub-header__nav__item">Coupons</div>
        <div className="sub-header__nav__item">Video Games</div>
        <div className="sub-header__nav__item">Toyes & Games</div>
      </div>
      <div className="start_selling">
        <RocketIcon />
        <span>Start selling on amazon today</span>
        <ChevronRightSharpIcon className="arrow-icon" />
      </div>
    </header>
  );
};
export default Subheader;
