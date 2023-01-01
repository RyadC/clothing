// REACT
import { useContext } from 'react';

// STYLES
import './checkout.styles.scss';

// DATA'S COMPONENTS
import { CartContext } from '../../context/cart.context';

// COMPONENTS
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


// MY COMPONENT
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { addItemToCart, removeItemToCart } = useContext(CartContext);
  
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
        {
          cartItems.map((cartItem) => {
            return (
              <CheckoutItem key={cartItem} cartItem={cartItem} />
            )
          })
        }
        <span className='total'>Total: {cartTotal}€</span>
    </div>
  );
};

export default Checkout;