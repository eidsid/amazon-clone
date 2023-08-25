export default (notification = [], action) => {
  switch (action.type) {
    case "ADD_NOT":
      return [...notification, action.payload];
    case "REMOVE_NOT":
      // console.log(action.payload);
      return notification.filter((noty) => noty.id !== action.payload);

    default:
      return notification;
  }
};
