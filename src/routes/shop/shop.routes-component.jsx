// REACT
import { useContext } from 'react';

// DATAS
import SHOP_DATA from '../../shop-data.json';

// COMPONENTS
import { ProductsContext } from '../../context/products.context';


// MY COMPONENT
const Shop = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div>
      {
        products.map((prdouct) => {
          return <h1 key={prdouct.id}>{prdouct.name}</h1>
        })
      }
    </div>
  );
};

export default Shop;