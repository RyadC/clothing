import { Fragment } from "react"
import { Outlet, Link, NavLink } from "react-router-dom";
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>

        <ul className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
        </ul>
      </nav>

      <Outlet />
    </Fragment>
  )
}

export default Navigation;