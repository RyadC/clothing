// REACT

// STYLES
import './cart-dropdown.styles.scss';

// DATA'S COMPONENT

// COMPONENTS
import Button from '../button/button.component';


// MY COMPONENT
const CartDropdown = () => {

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'/>
      <Button buttonType=''>GO TO CHECKOUT</Button>
    </div>
  )
};

export default CartDropdown;