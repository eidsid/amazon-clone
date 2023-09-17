import "./subheader.scss";
import RocketIcon from "@mui/icons-material/Rocket";
import Menu from "@mui/icons-material/Menu";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

const Subheader = ({ titles, showSideHeaderfun, filterProducts }) => {
  let links = titles.map((title) => {
    return (
      <div
        className="sub-header__nav__item"
        onClick={() => filterProducts(title)}
        key={title}
      >
        {title}
      </div>
    );
  });

  return (
    <div className="sub-header">
      <div className="bars" onClick={() => showSideHeaderfun()}>
        <Menu />
        all
      </div>
      <div className="sub-header__nav">{links}</div>
      <div className="start_selling">
        <RocketIcon />
        <span>Start selling on amazon today</span>
        <ChevronRightSharpIcon className="arrow-icon" />
      </div>
    </div>
  );
};
export default Subheader;
