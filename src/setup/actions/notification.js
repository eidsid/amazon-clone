export const AddNotifications = (msg) => (dispatch) => {
  const id = Math.floor(100000 + Math.random() * 900000);
  let noty = { msg, id };
  dispatch({ type: "ADD_NOT", payload: noty });
};
export const RemoveNotifications = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_NOT", payload: id });
};
