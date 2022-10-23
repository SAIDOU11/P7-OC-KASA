import { NavLink } from 'react-router-dom'
import LOGO from '../images/LOGO.png'

export default function StyledNavbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={LOGO} alt="Logo kasa" className="navbar__logo" />
      </NavLink>
      <div className="navbar__link">
        <NavLink to="/" end className="navbar__link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="navbar__link">
          A Propos
        </NavLink>
      </div>
    </nav>
  )
}
