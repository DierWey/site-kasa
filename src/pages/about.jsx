import React from "react"
import Banner from "../components/banner/banner.jsx"
import Image from "../images/about_banner.jpg"

const imgOpa = {opacity: '0.7'}
const txtBanner = ""

function About() {
  return (
    <>
      <Banner image={Image} opacity={imgOpa} text={txtBanner}/>
    </>
  )
}

export default About