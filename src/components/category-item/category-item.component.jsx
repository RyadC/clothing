import './category-item.styles.scss';

const CategoryItem = (props) => {

  const { category } = props;

  return (
    <div className='category-container'>
      <div className='background-image' style={{
        backgroundImage: `url(${category.imageUrl})`
      }} />
      <div className='category-body-container'>
        <h2>{category.title}</h2>
        <p>Découvrir</p>
      </div>
    </div>
  )

}

export default CategoryItem;