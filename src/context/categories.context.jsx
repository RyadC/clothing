// REACT
import { createContext, useEffect, useState } from "react";

// DATAS FIRESTORE
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// DATAS
import SHOP_DATA from '../shop-data';

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
      console.log(categoriesMap); 
    };
    getCategoriesMap();
    
  }, []);
  
  
  const value = {categoriesMap};
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};