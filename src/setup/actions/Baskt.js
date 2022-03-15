export const getItems = () => async (dispatch) => {
  try {
    // const { data } = await api.getItems();
    const data = [];
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const ADD_ITEM = (item) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_ITEM", payload: "item" });
    console.log(item);
  } catch (error) {
    console.log(error.message);
  }
};
export const REMOVE_ITEM = (id) => async (dispatch) => {
  try {
    // const { data } = api.createItem(item);
    console.log(id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
