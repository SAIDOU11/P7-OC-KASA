import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__container">
        <h1 className="notfound__error">404</h1>
        <p className="notfound__paragraph">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="notfound__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}
