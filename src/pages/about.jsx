import React from "react"
import Banner from "../components/banner/banner.jsx"
import Image from "../images/about_banner.jpg"

const imgOpa = {opacity: '0.7'}

function About() {
  return (
    <>
      <Banner image={Image} opacity={imgOpa}/>
    </>
  )
}

export default About