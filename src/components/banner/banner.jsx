import React from "react"

function Banner({ img, txt }) {
  return (
    <div className="banner">
      <img className="bannerImg" src={img} alt="Bannière" />
      <span className="bannerTxt">{txt}</span>
    </div>
  )
}

export default Banner