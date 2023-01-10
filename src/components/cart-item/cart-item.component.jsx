// STYLES
import {
  NameCartItemStyled,
  ItemDetailsStyled,
  CartItemContainerStyled,
} from './cart-item.styles.jsx';


// MY COMPONENT
const CartItem = (props) => {
  
  const { cartItem } = props;
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainerStyled>
      <img src={imageUrl} alt={name} />
      <ItemDetailsStyled>
        <NameCartItemStyled>{name}</NameCartItemStyled>
        <span className='price'>{quantity} x ${price}</span>
      </ItemDetailsStyled>
    </CartItemContainerStyled>
  )
};

export default CartItem;