import { Cancel } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RemoveNotifications } from "../../../setup/actions/notification";
import "./style.scss";
const Notification = (props) => {
  const [BarProgress, setBarProgress] = useState(0);
  const [Pussed, setPussed] = useState(false);
  const [Close, setClose] = useState("");
  const dispatch = useDispatch();
  const deleteBtn = () => {
    setBarProgress(100);
  };
  const handelDelete = () => {
    setClose("close");
    setTimeout(() => {
      dispatch(RemoveNotifications(props.noty.id));
    }, 500);
  };
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (BarProgress !== 100) {
        setBarProgress((val) => val + 1);
      } else {
        handelDelete();
      }
    }, 20);
    if (Pussed) {
      clearInterval(myInterval);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [BarProgress, Pussed]);

  return (
    <div
      className={`Notification ${props.noty.type} ${Close}  `}
      onMouseEnter={() => setPussed(true)}
      onMouseLeave={() => setPussed(false)}
    >
      <div className="col">
        <p>{props.noty.msg}</p>
        <Cancel className="close" onClick={() => deleteBtn()} />
      </div>
      <div className="bar">
        <div className="child" style={{ width: `${BarProgress}%` }}></div>
      </div>
    </div>
  );
};

export default Notification;
