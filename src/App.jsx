import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Lodgings from './pages/lodgings.jsx'
import Error from './pages/error.jsx'
import Footer from './components/footer/footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Header />
      </header>
      <main> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/lodgings/:id" element={<Lodgings />} />
          <Route path="*" element={<Error />} />
          <Route path="/notFound" element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
