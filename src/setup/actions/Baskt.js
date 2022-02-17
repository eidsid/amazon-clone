import * as api from "../api/Baskt";

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.getItems();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const ADD_ITEM = (item) => async (dispatch) => {
  try {
    const { data } = api.createItem(item);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteItem = (id) => async (dispatch) => {
  try {
    await api.deleteItem(id);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
