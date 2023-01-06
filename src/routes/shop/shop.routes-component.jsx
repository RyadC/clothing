// REACT-ROUTER-DOM
import { Routes, Route } from 'react-router-dom';

// STYLES
import './shop.styles.scss';

// COMPONENT
import CategoriesPreview from '../categories-preview/categories-preview.routes-component';


// MY COMPONENT
const Shop = () => {


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;