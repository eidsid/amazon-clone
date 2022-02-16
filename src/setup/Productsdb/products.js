import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (api) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(api);
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [api]);

  return Products;
};
export default useFetch;
