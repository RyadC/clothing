// REACT
import { Fragment, useContext } from "react"

// REACT ROUTER DOM
import { Outlet, Link } from "react-router-dom";

// STYLES
import './navigation.styles.scss';

// FIREBASE
import { signOutUser } from "../../utils/firebase/firebase.utils";

// COMPONENTS
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";



// MY COMPONENT
const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    const res = await signOutUser();
    console.log(res);
    
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>

        <ul className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          {
            currentUser ? <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span> 
            : 
            <Link className="nav-link" to='/auth'>SIGN IN</Link>
          }
        </ul>
      </nav>

      <Outlet />
    </Fragment>
  )
}

export default Navigation;