import React from "react"
import Banner from "../components/banner/banner.jsx"
import Image from "../images/home_banner.jpg"

const imgOpa = {opacity: '0.4'}
const txtBanner = "Chez vous, partout et ailleurs"

function Home() {
  return (
    <>
      <Banner image={Image} opacity={imgOpa} text={txtBanner}/>
    </>
  )
}

export default Home