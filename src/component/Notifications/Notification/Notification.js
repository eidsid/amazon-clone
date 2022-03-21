import { Cancel } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RemoveNotifications } from "../../../setup/actions/notification";
import "./style.scss";
const Notification = (props) => {
  const [BarProgress, setBarProgress] = useState(0);
  const [Close, setClose] = useState("");
  const dispatch = useDispatch();
  const deleteBtn = () => {
    setBarProgress(100);
  };
  const handelDelete = () => {
    setClose("close");
    setTimeout(() => {
      dispatch(RemoveNotifications(props.noty.id));
    }, 50);
  };
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (BarProgress !== 100) {
        setBarProgress((val) => val + 1);
      } else {
        handelDelete();
      }
    }, 20);
    return () => {
      clearInterval(myInterval);
    };
  }, [BarProgress]);

  return (
    <div className={`Notification ${Close}`}>
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