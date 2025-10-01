import React from "react"
import Banner from "../components/banner/banner.jsx"
import Image from "../images/home_banner.png"
import Cards from "../components/cards/cards.jsx"
import "./home.scss"

const imgOpa = {opacity: '0.4'}
const txtBanner1 = "Chez vous, partout et ailleurs"

function Home() {
  return (
    <>
      <Banner image={Image} opacity={imgOpa} text1={txtBanner1}/>    
      <section className="gallery">
        <Cards />
      </section>
    </>
  )
}

export default Home