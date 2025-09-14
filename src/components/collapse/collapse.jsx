import React from "react"
import { useState } from "react"
import "./collapse.css"

function Collapse({title, content}) {

    const [visible, setVisible] = useState(false);
    const [rotation, setRotation] = useState("none")
    const toggleText = () => {
        setVisible(!visible);
        setRotation(visible ? "none" : "rotate(180deg)")
    };

    return (
        <section className="collapse">
            <div className="collapseHead">
                <h2 className="collapseTitle">{title}</h2>
                <i onClick={toggleText} className="fa-solid fa-chevron-up" style={{transform: rotation}} ></i>
            </div>
            <p className={`collapseContent fade ${visible ? "show" : ""}`}>{content}</p>
        </section>        
    )
}

export default Collapse