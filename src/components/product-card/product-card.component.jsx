// REACT
import { useContext } from 'react';

// STYLED COMPONENT
import {
  ImgProductCardStyled,
  ProductCardContainerStyled,
  NameProductCardStyled,
  PriceProductCardStyled,
  FooterProductCardStyled,
} from './product-card.styles.jsx';

// DATA'S COMPONENTS
import { CartContext } from '../../context/cart.context';

// COMPONENTS
import Button from '../button/button.component';

// DATAS
import { BUTTON_TYPE_CLASSES } from '../button/button.component';


// MY COMPONENT
const ProductCard = (props) => {
  const { product } = props;
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainerStyled>
      <ImgProductCardStyled src={imageUrl} alt={`${name}`} />
      <FooterProductCardStyled>
        <NameProductCardStyled>{name}</NameProductCardStyled>
        <PriceProductCardStyled>{price}</PriceProductCardStyled>
      </FooterProductCardStyled>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>    
    </ProductCardContainerStyled>
  )
};


export default ProductCard;