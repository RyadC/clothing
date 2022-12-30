// REACT
import { useContext } from 'react';

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

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item}></CartItem>
          })
        }
      </div>
      <Button buttonType=''>GO TO CHECKOUT</Button>
    </div>
  )
};

export default CartDropdown;