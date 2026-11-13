import React from "react"
import logoFooter from "../../images/logo_footer.png"
import "./footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="footerImg">
        <img src={logoFooter} alt="logo footer" />
      </div>
      <div className="footerTxt">
        <i className="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved        
      </div>
    </div>
  )
}

export default Footer

