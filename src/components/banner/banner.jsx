import React from "react"
import "./banner.scss"

function Banner({ image, opacity, text1,text2 }) {
  return (
    <section className="banner">
        <img className="bannerImg" src={image} style={opacity} alt="Bannière" />
        <div className="bannerTxtContainer">
          <div className="bannerTxt">
            <div className="bannerTxt1">{text1}</div>
            <div className="bannerTxt2">{text2}</div>
          </div>
        </div>
    </section>
  )
}

export default Banner