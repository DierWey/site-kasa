import { NavLink } from 'react-router-dom'
import "./error.scss"

function Error() {
  return (
    <div className="pageError">
      <h1 className="h1">404</h1>
      <h2 className="h2">Oups ! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/" className="navBackHome">Retourner sur la page d'accueil</NavLink>
    </div>
  )
}

export default Error