// STYLES
import './cart-item.styles.scss';


// MY COMPONENT
const CartItem = (props) => {
  
  const { cartItem } = props;
  const { name, quantity } = cartItem;

  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  )
};

export default CartItem;