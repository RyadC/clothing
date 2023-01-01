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
  clearItemFromCart: () => {},
  cartTotal: 0,
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
}

const clearCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Déclenchée lorsqu'un produit est choisi (bouton cliqué)
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearCartItem(cartItems, productToRemove));
  };

  // Modifier la quantité totale d'articles du panier dès l'ajout ou la suppression d'un article
  useEffect(() => {
    const newCartCount = cartItems.reduce((totalQuantity, currentItem) => totalQuantity + currentItem.quantity, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  // Modifier la prix total d'articles du panier dès l'ajout ou la suppression d'un article
  useEffect(() => {
    const newCartTotal = cartItems.reduce((totalPrice, currentItem) => totalPrice + currentItem.quantity * currentItem.price, 0);

    setCartTotal(newCartTotal);
  }, [cartItems]);


  const value = { isCartOpen, setIsCartOpen,cartItems, addItemToCart, cartCount, setCartCount, removeItemToCart, clearItemFromCart, cartTotal };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};