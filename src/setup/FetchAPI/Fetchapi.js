import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (api) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(api);
        setdata(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [api]);

  return data;
};
export default useFetch;
