// STYLES
import './directory.styles.scss';

// COMPONENTS
import DirectoryItem from '../directory-item/directory-item.component';


// MY COMPONENT
const Directory = (props) => {
  const { categories } = props;

  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory;

