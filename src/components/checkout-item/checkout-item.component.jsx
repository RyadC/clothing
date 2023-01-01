// REACT
import { useContext } from 'react';

// STYLES
import './checkout-item.styles.scss';

// DATA'S COMPONENT
import { CartContext } from '../../context/cart.context';


// MY COMPONENT
const CheckoutItem = (props) => {
  const { cartItem } = props;
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemToCartHandler = () => addItemToCart(cartItem); 
  const removeCartItemHandler = () => removeItemToCart (cartItem); 

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeCartItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemToCartHandler}>
        &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;