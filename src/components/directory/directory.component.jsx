// STYLED COMPONENT
import { DirectoryContainerStyled } from './directory.styles.jsx';

// COMPONENTS
import DirectoryItem from '../directory-item/directory-item.component';


// MY COMPONENT
const Directory = (props) => {
  const { categories } = props;

  return (
    <DirectoryContainerStyled>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainerStyled>
  )
}

export default Directory;

