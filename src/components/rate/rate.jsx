import React from "react"
import "./rate.scss"

function Rate ({grade}) {
const stars = []

for (let i = 1; i < 6; i++) {
    stars.push (i <= grade ? (
        <div key={i}><i className="fa-solid fa-star starActive"></i></div>        
        ) : (
        <div key={i}><i className="fa-solid fa-star starInactive"></i></div>
        ))
}

    return (
        <>
            {stars}
        </>
    )
}

export default Rate