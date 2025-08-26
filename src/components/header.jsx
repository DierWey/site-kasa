import React from "react"
import { NavLink } from 'react-router-dom'

const navLinkActive = ({ isActive }) => ({
  textDecoration: isActive ? 'underline' : 'none'
})

function Header() {
  return (    
    <>
        <img src="/src/images/logo_header.png" alt="logo Kasa"></img>
        {/* Navigation */}
        <nav className="headerNav">
            <NavLink to="/pages/home" style={navLinkActive} className="navHome">Home</NavLink>
            <NavLink to="/pages/about" style={navLinkActive} className="navAbout">About</NavLink>
        </nav>
    </>
  )
}

export default Header