import React from "react"
import Banner from "./components/banner/banner.jsx"
import Img from "./images/home_banner.jpg"

const txtBanner = "Chez vous, partout et ailleurs"

function Home() {
  return (
    <>
      <Banner img={Img} txt={txtBanner} />
    </>
  )
}

export default Home