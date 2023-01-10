// STYLED COMPONENTS
import { 
  DirectoryItemContainerStyled,
  DirectoryItemBodyStyled,  
  BackgroundImageStyled,
} from  './directory-item.styles.jsx';

const DirectoryItem = (props) => {

  const { category } = props;
  const { imageUrl } = category;

  return (
    <DirectoryItemContainerStyled>
      <BackgroundImageStyled imageUrl={imageUrl} />
      <DirectoryItemBodyStyled>
        <h2>{category.title}</h2>
        <p>Découvrir</p>
      </DirectoryItemBodyStyled>
    </DirectoryItemContainerStyled>
  )

}

export default DirectoryItem;