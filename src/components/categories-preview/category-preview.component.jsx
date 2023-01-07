// REACT ROUTER DOM
import { Link } from 'react-router-dom';

// STYLES
import './category-preview.styles.scss';

// COMPONENTS
import ProductCard from "../product-card/product-card.component";


// MY COMPONENT
const CategoryPreview = (props) => {
  const { title, products } = props;

  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`${title}`}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {
          products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </div>
    </div>
  )
};

export default CategoryPreview;