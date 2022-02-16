import "./subtitles.scss";
const Subtitles = (props) => {
  let subtitlesDom = () => {
    return props.titles.map((title) => {
      return (
        <li onClick={() => props.filterProducts(title)} key={title}>
          {title}
        </li>
      );
    });
  };
  return (
    <>
      <ul className="subtitles">
        <li>Home</li>
        {subtitlesDom}
      </ul>
      <hr />
    </>
  );
};

export default Subtitles;
