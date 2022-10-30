import { Link } from 'react-router-dom'
import LOGO from '../images/LOGO.png'

export default function StyledNavbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={LOGO} alt="Logo kasa" className="navbar__logo" />
      </Link>
      <div className="navbar__link">
        <Link to="/" end className="navbar__link">
          Accueil
        </Link>
        <Link to="/about" className="navbar__link">
          A Propos
        </Link>
      </div>
    </nav>
  )
}
