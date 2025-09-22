import React from "react"
import { NavLink } from "react-router-dom"
import Location from "../../data/logements.json"
import "./cards.css"

function Cards() {
    return (
        Location.map((loc) => (
            <article key={loc.id} id={loc.id} className="card">
                <NavLink to={`/pages/lodgings/${loc.id}`} className="cardLink">
                    <img className="cardImage" src={loc.cover} alt={loc.title} />
                    <div className="cardTitle">{loc.title}</div>
                </NavLink>
            </article>
        ))
    )          
}

export default Cards