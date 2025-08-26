import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Lodgings from './pages/lodgings.jsx'
import Error from './pages/error.jsx'

const navLinkActive = ({ isActive }) => ({
  textDecoration: isActive ? 'underline' : 'none'
})

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <img src="/src/images/logo_header.png" alt="logo Kasa"></img>
        {/* Navigation */}
        <nav className="headerNav">
          <NavLink to="/pages/home" style={navLinkActive} className="navHome">Home</NavLink>
          <NavLink to="/pages/about" style={navLinkActive} className="navAbout">About</NavLink>
        </nav>
      </header>
      <main>        
        {/* Routes */}
        <Routes>
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/lodgings" element={<Lodgings />} />
          <Route path="/pages/error" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
