// REACT ROUTER DOM
import { Link } from 'react-router-dom';

// STYLED COMPONENTS
import {
  CategoryPreviewContainerStyled,
  PreviewContainerCategoryPreviewStyled,
  TitleCategoryPreviewStyled,
} from './category-preview.styles.jsx';

// COMPONENTS
import ProductCard from "../product-card/product-card.component";


// MY COMPONENT
const CategoryPreview = (props) => {
  const { title, products } = props;

  return (
    <CategoryPreviewContainerStyled>
      <h2>
        <Link to={`${title}`}>
          <TitleCategoryPreviewStyled>
            {title.toUpperCase()}
          </TitleCategoryPreviewStyled>
        </Link>
      </h2>
      <PreviewContainerCategoryPreviewStyled>
        {
          products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </PreviewContainerCategoryPreviewStyled>
    </CategoryPreviewContainerStyled>
  )
};

export default CategoryPreview;