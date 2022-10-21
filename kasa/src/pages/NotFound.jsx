import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="notfound">
      <div className="container">
        <h1 className="error">404</h1>
        <p className="paragraph">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}
