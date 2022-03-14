export default (user = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    case "SET_USER":
      return action.payload;
    default:
      return user;
  }
};
