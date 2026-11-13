import { NavLink } from 'react-router-dom'
import logoHeader from "../../images/logo_header.png"
import "./header.scss"

const navLinkActive = ({ isActive }) => ({
  textDecoration: isActive ? 'underline' : 'none'
})

function Header() {
  return (    
    <>
        <img className="headerImg" src={logoHeader} alt="logo Kasa" />
        <nav className="headerNav">
            <NavLink to="/" style={navLinkActive} className="navHome">Accueil</NavLink>
            <NavLink to="/pages/about" style={navLinkActive} className="navAbout">À propos</NavLink>
        </nav>
    </>
  )
}

export default Header