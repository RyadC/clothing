// REACT ROUTER DOM
import { useNavigate } from 'react-router-dom';

// STYLED COMPONENTS
import { 
  DirectoryItemContainerStyled,
  DirectoryItemBodyStyled,  
  BackgroundImageStyled,
} from  './directory-item.styles.jsx';


// MY COMPONENT
const DirectoryItem = (props) => {
  const { category } = props;
  const { imageUrl } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(category.route);

  return (
      <DirectoryItemContainerStyled onClick={onNavigateHandler}>
        <BackgroundImageStyled imageUrl={imageUrl} />
        <DirectoryItemBodyStyled>
          <h2>{category.title}</h2>
          <p>Découvrir</p>
        </DirectoryItemBodyStyled>
      </DirectoryItemContainerStyled>
  )

}

export default DirectoryItem;