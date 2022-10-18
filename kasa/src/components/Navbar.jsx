import { Link } from 'react-router-dom'
import LOGO from '../images/LOGO.png'

export default function Navbar() {
  return (
    <nav className="navbar ">
      <div>
        <Link to="/">
          <img
            src={LOGO}
            alt="logo kasa"
            className="navbar__logo responsive-logo"
          />
        </Link>
      </div>

      <div>
        <Link className="navbar__link" to="/">
          Acceuil
        </Link>
        <Link className="navbar__link" to="/about">
          A Propos
        </Link>
      </div>
    </nav>
  )
}
