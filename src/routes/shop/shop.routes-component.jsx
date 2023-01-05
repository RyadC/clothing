// REACT
import { Fragment } from 'react';
import { useContext } from 'react';

// DATA'S COMPONENTS 
import { CategoriesContext } from '../../context/categories.context';

// STYLES
import './shop.styles.scss';

// COMPONENT
import ProductCard from '../../components/product-card/product-card.component';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';


// MY COMPONENT
const Shop = () => {

  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
           return <CategoriesPreview key={title} title={title} products={products} />
        })
      }
    </div>
  );
};

export default Shop;