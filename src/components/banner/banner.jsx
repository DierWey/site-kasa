import React from "react"
import "./banner.css"

function Banner({ image, opacity, text1, text2 }) {
  return (
    <section className="banner">
        <img className="bannerImg" src={image} style={opacity} alt="Bannière" />
        <div className="bannerTxt">{text1}</div>
    </section>
  )
}

export default Banner