import React from "react"
import "./banner.css"

function Banner({ image, opacity, text }) {
  return (
    <section className="banner">
      <img className="bannerImg" src={image} style={opacity} alt="Bannière" />
      <div className="bannerTxt">
        <span>{text}</span>
      </div>
    </section>
  )
}

export default Banner