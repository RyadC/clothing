// REACT
import { Fragment, useContext } from "react"

// REACT ROUTER DOM
import { Outlet, Link } from "react-router-dom";

// STYLES
import './navigation.styles.scss';

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
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>

        <ul className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          {
            currentUser ? <span className="nav-link" onClick={signOutUser}>SIGN OUT</span> 
            : 
            <Link className="nav-link" to='/auth'>SIGN IN</Link>
          }
          <CartIcon />
        </ul>
        {isCartOpen && <CartDropdown />}
      </nav>

      <Outlet />
    </Fragment>
  )
}

export default Navigation;