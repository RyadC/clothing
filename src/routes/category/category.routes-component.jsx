// REACT ROUTER DOM
import { useParams } from "react-router-dom";

// REACT
import { useContext, useState, useEffect, Fragment } from "react";

// STYLED COMPONENT
import { CategoryContainerStyled, CategoryTitleStyled } from './category.styles.jsx';

// DATA'S COMPONENTS
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";



// MY COMPONENT
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);


  return (
    <Fragment>
      <CategoryTitleStyled>{category.toUpperCase()}</CategoryTitleStyled>
      <CategoryContainerStyled>
        { products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </CategoryContainerStyled>
    </Fragment>
  )
};

export default  Category;