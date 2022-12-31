// REACT
import { createContext, useEffect, useState } from "react";


// MY COMPONENT
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

const addCartItem = (cartItems, productToAdd) => {
  const isPresentProductToAdd = cartItems.find(item => item.id === productToAdd.id);

  let cartItemsWithProductadded = [];

  if(isPresentProductToAdd){
    cartItemsWithProductadded = cartItems.map((item) => {
      if(item.id === productToAdd.id){
        return {...item, quantity: item.quantity + 1
        }
      } else {
        return item;
      };
    });

  } else {
    cartItemsWithProductadded = [...cartItems, {...productToAdd, quantity: 1}]
  };

  return cartItemsWithProductadded;

};

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Déclenchée lorsqu'un produit est choisi (bouton cliqué)
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((totalQuantity, currentItem) => totalQuantity + currentItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = { isCartOpen, setIsCartOpen,cartItems, addItemToCart, cartCount, setCartCount  };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
};