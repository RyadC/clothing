// REACT
import { Fragment, useContext } from "react"

// REACT ROUTER DOM
import { Outlet, Link } from "react-router-dom";

// STYLES
// import './navigation.styles.jsx';
import {
    NavigationContainerStyled,
    LogoContainerStyled,
    NavLinksContainerStyled,
    NavLinkStyled,
  } from "./navigation.styles";

// FIREBASE
import { signOutUser } from "../../utils/firebase/firebase.utils";

// DATA'S COMPONENTS
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

// COMPONENTS
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";



// MY COMPONENT
const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainerStyled>
        <LogoContainerStyled to='/'>
          <CrwnLogo className="logo" />
        </LogoContainerStyled>

        <NavLinksContainerStyled >
          <NavLinkStyled className="nav-link" to='/shop'>SHOP</NavLinkStyled>
          {
            currentUser ? 
              <NavLinkStyled as='span' onClick={signOutUser}>SIGN OUT</NavLinkStyled> 
              : 
              <NavLinkStyled to='/auth'>SIGN IN</NavLinkStyled>
          }
          <CartIcon />
        </NavLinksContainerStyled>
        
        {isCartOpen && <CartDropdown />}
      </NavigationContainerStyled>

      <Outlet />
    </Fragment>
  )
}

export default Navigation;