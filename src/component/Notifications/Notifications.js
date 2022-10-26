import "./style.scss";
import Notification from "./Notification/Notification";
import { useSelector } from "react-redux";
const Notifications = () => {
  const notifications = useSelector((state) => state.Notifications);

  const notificationsDom = notifications.map((noty) => {
    return <Notification noty={noty} key={noty.id} />;
  });
  return <div className="Notifications">{notificationsDom}</div>;
};

export default Notifications;
