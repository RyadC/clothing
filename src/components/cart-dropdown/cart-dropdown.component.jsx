// REACT
import { useContext } from 'react';

// REACT ROUTER DOM
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// STYLES
import './cart-dropdown.styles.scss';

// DATA'S COMPONENT
import { CartContext } from '../../context/cart.context';

// COMPONENTS
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';


// MY COMPONENT
const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item}></CartItem>
          })
        }
      </div>
      <Button buttonType='' onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </div>
  )
};

export default CartDropdown;