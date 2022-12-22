//STYLES
import './button.styles.scss'

/*
On sait qu'on a trois type de bouton:
- default button
- inverted button
- google sign in button

*/

const BUTTON_TYPE_CLASSES = {
  inverted: 'inverted',
  google: 'google-sign-in',
}


const Button = (props) => {

  const { children, buttonType, ...otherProps } = props;

  return (
    <button 
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button;