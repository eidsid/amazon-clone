export default (products = [], action) => {
  // let my_products = products;
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS":
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
