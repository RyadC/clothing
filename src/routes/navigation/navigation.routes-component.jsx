import { Fragment } from "react"
import { Outlet, Link, NavLink } from "react-router-dom"

const Navigation = () => {

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <div className="logo">Logo</div>
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