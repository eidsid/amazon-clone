import "./subheader.scss";
import RocketIcon from "@mui/icons-material/Rocket";
import Menu from "@mui/icons-material/Menu";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

const Subheader = (props) => {
  let links = props.titles.map((title) => {
    return (
      <div
        className="sub-header__nav__item"
        onClick={() => props.filterProducts(title)}
        key={title}
      >
        {title}
      </div>
    );
  });

  return (
    <header className="sub-header">
      <div className="bars">
        <Menu />
        all
      </div>
      <div className="sub-header__nav">{links}</div>
      <div className="start_selling">
        <RocketIcon />
        <span>Start selling on amazon today</span>
        <ChevronRightSharpIcon className="arrow-icon" />
      </div>
    </header>
  );
};
export default Subheader;
