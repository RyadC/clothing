// REACT
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';

// STYLED COMPONENTS
import { 
  ShoppingIconStyled,
  CartIconContainerStyled,
  ItemCountStyled,
} from './cart-icon.styles.jsx';

// DATA'S COMPONENTS
import { CartContext } from '../../context/cart.context';


// MY COMPONENT
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainerStyled onClick={toogleIsCartOpen}>
      <ShoppingIconStyled/>
      <ItemCountStyled>{cartCount}</ItemCountStyled>
    </CartIconContainerStyled>
  );
};

export default CartIcon;