export const getUser = () => async (dispatch) => {
  dispatch({ type: "GET_USER" });
};

export const setUser = (USER) => async (dispatch) => {
  dispatch({ type: "SET_USER", payload: USER });
};
