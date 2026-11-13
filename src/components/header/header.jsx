import { NavLink } from 'react-router-dom'
import "./header.scss"

const navLinkActive = ({ isActive }) => ({
  textDecoration: isActive ? 'underline' : 'none'
})

function Header() {
  return (    
    <>
        <img className="headerImg" src="/src/images/logo_header.png" alt="logo Kasa"></img>
        <nav className="headerNav">
            <NavLink to="/" style={navLinkActive} className="navHome">Accueil</NavLink>
            <NavLink to="/pages/about" style={navLinkActive} className="navAbout">À propos</NavLink>
        </nav>
    </>
  )
}

export default Header