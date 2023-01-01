// REACT
import { createContext, useEffect, useState } from "react";


// MY COMPONENT
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemToCart: () => {},
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

const removeCartItem = (cartItems, productToRemove) => {
  const isPresentProductToAdd = cartItems.find(item => item.id === productToRemove.id);

  // Si la quantité est égale à 1 alors on supprime l'article (on récupère tous les articles sauf celui qu'on veut supprimer)
  if(isPresentProductToAdd.quantity === 1){
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  };

  // Si la quantité est supérieur à 1, on enlève 1 à la quantité actuelle
  return cartItems.map((cartItem) =>
  cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
);
};

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Déclenchée lorsqu'un produit est choisi (bouton cliqué)
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToAdd) => {
    setCartItems(removeCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((totalQuantity, currentItem) => totalQuantity + currentItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = { isCartOpen, setIsCartOpen,cartItems, addItemToCart, cartCount, setCartCount, removeItemToCart };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};