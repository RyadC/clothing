// REACT-ROUTER-DOM
import { Routes, Route } from 'react-router-dom';

// STYLES
import './shop.styles.jsx';

// COMPONENT
import CategoriesPreview from '../categories-preview/categories-preview.routes-component';
import Category from '../category/category.routes-component';


// MY COMPONENT
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;