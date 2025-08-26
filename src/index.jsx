import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Lodgings from './pages/lodgings.jsx'
import Error from './pages/error.jsx'
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"

const Index = (
  <BrowserRouter>
    <div>
      <Header />
      {/* Routes */}
        <Routes>
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/lodgings" element={<Lodgings />} />
          <Route path="/pages/error" element={<Error />} />
        </Routes>
      <Footer />
    </div>
  </BrowserRouter>
)

export default Index