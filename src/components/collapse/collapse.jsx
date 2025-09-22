import React from "react"
import { useState } from "react"

function Collapse({title, content}) {

    const [visible, setVisible] = useState(false);
    const [rotation, setRotation] = useState("none")
    const toggleText = () => {
        setVisible(!visible);
        setRotation(visible ? "none" : "rotate(180deg)")
    }

    return (
        <section className="collapse">
            <div className="collapseHead">
                <span className="collapseTitle">{title}</span>
                <i onClick={toggleText} className="fa-solid fa-chevron-up" style={{transform: rotation}} ></i>
            </div>
            <div className={`collapseContent fade ${visible ? "show" : ""}`}>
                <div className="contentContainer">{content}</div>
            </div>
        </section>        
    )
}

export default Collapse