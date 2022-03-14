export default (user = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "LogOut":
      return null;
    default:
      return user;
  }
};
