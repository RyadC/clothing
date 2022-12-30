// REACT
import { useContext } from 'react';

// STYLES
import './product-card.styles.scss';

// DATA'S COMPONENTS
import { CartContext } from '../../context/cart.context';

// COMPONENTS
import Button from '../button/button.component';


// MY COMPONENT
const ProductCard = (props) => {
  const { product } = props;
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>    
    </div>
  )
};


export default ProductCard;