// REACT ROUTER DOM
import { useParams } from "react-router-dom";

// REACT
import { useContext, useState, useEffect, Fragment } from "react";

// STYLES
import './category.styles.scss';

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
      <h2>{category.toUpperCase()}</h2>
      <div className="category-container">
        { products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </div>
    </Fragment>
  )
};

export default  Category;