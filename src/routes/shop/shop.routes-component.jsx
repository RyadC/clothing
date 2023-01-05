// REACT
import { Fragment } from 'react';
import { useContext } from 'react';

// DATA'S COMPONENTS 
import { CategoriesContext } from '../../context/categories.context';

// STYLES
import './shop.styles.scss';

// COMPONENT
import ProductCard from '../../components/product-card/product-card.component';


// MY COMPONENT
const Shop = () => {

  const { categoriesMap } = useContext(CategoriesContext);

  return (

    <div>
      {
        Object.keys(categoriesMap).map((title) => {
          return <Fragment key={title}>
            <h2>{title}</h2>
            <div className='products-container'>
              {
                categoriesMap[title].map((product) => {
                  return <ProductCard key={product.id} product={product}></ProductCard>
                })
              }
            </div>
          </Fragment>
        })
      }
    </div>

  );
};

export default Shop;