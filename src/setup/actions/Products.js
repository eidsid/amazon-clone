import * as api from "../api/Products";

let Fetchproducts = api.getProducts();

export const getProducts = () => async (dispatch) => {
  try {
    const data = await Fetchproducts;
    dispatch({ type: "FETCH_ALL_PRODUCTS", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const FilterProductsCat = (category) => async (dispatch) => {
  try {
    const data = await Fetchproducts;
    let filterd = data.data.filter((item) => item.category == category);
    dispatch({ type: "FILTER_BY_CATOGARY", payload: filterd });
  } catch (error) {
    console.log(error.message);
  }
};

export const FilterProductsSearch = (SearchText) => async (dispatch) => {
  try {
    const data = await Fetchproducts;
    let filterd = data.data.filter((item) => item.includes(SearchText));
    dispatch({ type: "FILTER_BY_SEARCH", filterd });
  } catch (error) {
    console.log(error.message);
  }
};
export const FilterProductsPrice = (price) => async (dispatch) => {
  try {
    const data = await Fetchproducts;
    let filterd = data.data.filter((item) => item.price < price);
    dispatch({ type: "FILTER_BY_PRICE", filterd });
  } catch (error) {
    console.log(error.message);
  }
};
