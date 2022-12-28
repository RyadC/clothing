// REACT
import { createContext, useEffect, useState } from "react";

// DATAS
import PRODUCTS_DATA from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  // setProducts: () => null,
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const value = {products};

  useEffect(() => {

  });


  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};