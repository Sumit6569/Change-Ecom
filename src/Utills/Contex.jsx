import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();
function Contex(props) {
  const [product, setproduct] = useState([]);

  const getproducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <productContext.Provider
      value={[
        product,
        setproduct,
        
      ]}
    >
      {props.children}
    </productContext.Provider>
  );
}

export default Contex;
