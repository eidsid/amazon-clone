export default (Baskt = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "ADD_ITEM":
      return [...Baskt, action.payload];
    case "REMOVE_ITEM":
      console.log(action.payload);
      return Baskt.filter((item) => item.id !== action.payload);

    default:
      return Baskt;
  }
};
