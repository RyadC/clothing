// REACT
import { useContext } from 'react';

// REACT ROUTER DOM
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// STYLED COMPONENTS
import { 
  CartDropdownContainerStyled,
  EmptyMessageStyled,
  CartItemsStyled
} from './cart-dropdown.styles.jsx';

// DATA'S COMPONENT
import { CartContext } from '../../context/cart.context';

// COMPONENTS
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

// DATAS
import { BUTTON_TYPE_CLASSES } from '../button/button.component';


// MY COMPONENT
const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainerStyled>
      <CartItemsStyled>
        {
          cartItems.length ?
            cartItems.map((item) => {
              return <CartItem key={item.id} cartItem={item}></CartItem>
            })
          :
            <EmptyMessageStyled>Your cart is empty</EmptyMessageStyled>  
        }
      </CartItemsStyled>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </CartDropdownContainerStyled>
  )
};

export default CartDropdown;