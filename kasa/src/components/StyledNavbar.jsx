import { NavLink } from 'react-router-dom'
import LOGO from '../images/LOGO.png'

export default function StyledNavbar() {
  return (
    <nav className="navbar ">
      <NavLink to="/">
        <img src={LOGO} alt="Logo kasa" className="navbar__logo" />
      </NavLink>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'active navbar__link' : 'navbar__link '
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'active navbar__link' : 'navbar__link'
          }
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  )
}
