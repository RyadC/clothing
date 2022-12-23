// REACT
import { Fragment, useContext } from "react"

// REACT ROUTER DOM
import { Outlet, Link } from "react-router-dom";

// STYLES
import './navigation.styles.scss';

// COMPONENTS
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";


const Navigation = () => {

  const { currentUser } = useContext(UserContext);

  console.log(currentUser)

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>

        <ul className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          <Link className="nav-link" to='/auth'>SIGN IN</Link>
        </ul>
      </nav>

      <Outlet />
    </Fragment>
  )
}

export default Navigation;