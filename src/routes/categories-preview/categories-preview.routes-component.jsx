// REACT
import { Fragment, useContext } from 'react';

// DATA'S COMPONENTS 
import { CategoriesContext } from '../../context/categories.context';

// STYLES
import './categories-preview.styles.jsx';

// COMPONENT
import CategoryPreview from '../../components/categories-preview/category-preview.component';

// MY COMPONENT
const CategoriesPreview = () => {

  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
           return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </Fragment>
  );
};

export default CategoriesPreview;