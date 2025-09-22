import React from "react"
import "./tag.scss"

function Tag ({ label }) {
  return (
    <div className="tag">
      <span className="tagButton">{label}</span>
    </div>
  )
}

export default Tag