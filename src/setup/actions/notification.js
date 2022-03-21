export const AddNotifications = (noty) => (dispatch) => {
  const id = Math.floor(100000 + Math.random() * 900000);
  let not = { ...noty, id };
  dispatch({ type: "ADD_NOT", payload: not });
};
export const RemoveNotifications = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_NOT", payload: id });
};
