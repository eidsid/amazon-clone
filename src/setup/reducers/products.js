const actions = (products = [], action) => {
  switch (action.type) {
    case "FETCH_AAL_PRODUCTS":
      return action.payload;
    case "FILTER_BY_CATOGARY":
      return action.payload;
    case "FILTER_BY_SEARCH":
      return action.payload;
    case "FILTER_BY_PRICE":
      return action.payload;
    default:
      return products;
  }
};
export default actions;
