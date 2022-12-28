// REACT
import { useContext } from 'react';

// DATA'S COMPONENTS 
import { ProductsContext } from '../../context/products.context';

// STYLES
import './shop.styles.scss';

// COMPONENT
import ProductCard from '../../components/product-card/product-card.component';


// MY COMPONENT
const Shop = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {
        products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>
        })
      }
    </div>
  );
};

export default Shop;