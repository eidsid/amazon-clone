export default (Baskt = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "ADD_ITEM":
      return [...Baskt, action.payload];
    case "REMOVE_ITEM":
      return Baskt.filter((item) => item.id !== action.payload);
    case "UPDATE_ITEM":
      return Baskt.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return Baskt;
  }
};
