// REACT
import { useContext } from 'react';

// STYLES
import {
  HeaderBlockStyled,
  CheckoutContainerStyled,
  CheckoutHeaderStyled,
  TotalStyled,
 } from './checkout.styles.jsx';

// DATA'S COMPONENTS
import { CartContext } from '../../context/cart.context';

// COMPONENTS
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


// MY COMPONENT
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { addItemToCart, removeItemToCart } = useContext(CartContext);
  
  return (
    <CheckoutContainerStyled>
      <CheckoutHeaderStyled>
        <HeaderBlockStyled>
          <span>Product</span>
        </HeaderBlockStyled>

        <HeaderBlockStyled>
          <span>Description</span>
        </HeaderBlockStyled>

        <HeaderBlockStyled>
          <span>Quantity</span>
        </HeaderBlockStyled>

        <HeaderBlockStyled>
          <span>Price</span>
        </HeaderBlockStyled>
        
        <HeaderBlockStyled>
          <span>Remove</span>
        </HeaderBlockStyled>
      </CheckoutHeaderStyled>
        {
          cartItems.map((cartItem) => {
            return (
              <CheckoutItem key={cartItem} cartItem={cartItem} />
            )
          })
        }
        <TotalStyled>Total: {cartTotal}€</TotalStyled>
    </CheckoutContainerStyled>
  );
};

export default Checkout;