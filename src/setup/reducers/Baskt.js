export default (Baskt = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "ADD_ITEM":
      return [...Baskt, action.payload];
    case "Remove_ITEM":
      return Baskt.filter((item) => item.id !== action.payload.id);
    default:
      return Baskt;
  }
};
