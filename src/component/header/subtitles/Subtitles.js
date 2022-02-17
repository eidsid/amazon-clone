import "./subtitles.scss";
const Subtitles = (props) => {
  let subtitlesDom = props.titles.map((linke) => {
    return (
      <li onClick={() => props.filterProducts(linke)} key={linke}>
        {linke}
      </li>
    );
  });
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
