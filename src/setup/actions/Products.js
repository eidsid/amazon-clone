import * as api from "../api/Products";

let Fetchproducts = api.getProducts();

export const getProducts = () => async (dispatch) => {
  try {
    const data = await Fetchproducts;
    dispatch({ type: "FETCH_AAL_PRODUCTS", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const FilterProductsCat = (category) => async (dispatch) => {
  try {
    const data = await Fetchproducts;
    let filterd;
    if (category === "ALL") {
      filterd = data.data;
    } else {
      filterd = data.data.filter((item) => item.category === category);
    }
    dispatch({ type: "FILTER_BY_CATOGARY", payload: filterd });
  } catch (error) {
    console.log(error.message);
  }
};
export const FilterProductsSearch = (SearchText) => async (dispatch) => {
  try {
    const data = await Fetchproducts;
    let filterd = data.data.filter((item) => {
      if (
        item.description.toLowerCase().includes(SearchText.toLowerCase()) ||
        item.category.toLowerCase().includes(SearchText.toLowerCase()) ||
        item.title.toLowerCase().includes(SearchText.toLowerCase())
      ) {
        return item;
      }
    });
    console.log(filterd);
    dispatch({ type: "FILTER_BY_PRICE", payload: filterd });
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
