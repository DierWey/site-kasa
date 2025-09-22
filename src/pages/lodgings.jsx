import React from "react"
import { useParams } from "react-router-dom"
import Location from "../data/logements.json"
import Carousel from "../components/carousel/carousel.jsx"
import Collapse from "../components/collapse/collapse.jsx"
import Tag from "../components/tags/tag.jsx"
import Rate from "../components/rate/rate.jsx"
import "./lodgings.scss"

function Lodgings() {

  /** Récupèration de l'id du logement correspondant à la card cliquée **/
  const { id } = useParams()
  
  /** Récupération de l'objet correspondant à l'id récupéré plus haut **/
  const currentLocation = Location.find((loc) => loc.id === id)

  const pictures = currentLocation.pictures

  const title = currentLocation.title
  const location = currentLocation.location
  const tags = currentLocation.tags.map((tags, i) => {
    return <Tag key={i} label={tags} />
  })

  const nameHost = currentLocation.host.name
  const pictureHost = currentLocation.host.picture
  const grade = currentLocation.rating
    
  const equipments = currentLocation.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    )
  })
  const description = currentLocation.description

  return (
    <div className="lodgings">
      <Carousel slider={pictures}/>
      <section className="lodgingsFeatures">
        <div className="lodgingsTitleLocation">
          <h1>{title}</h1>
          <h2>{location}</h2>
          <div className="lodgingsTags">{tags}</div>          
        </div>
        <div className="lodgingsHostings">
          <div className="host">
            <span className="hostName">{nameHost}</span>
            <img className="hostImg" src={pictureHost} alt=""></img>
          </div>
          <div className="rate">
            < Rate grade={grade}/>
          </div>
        </div>
      </section>
      <section className="detailsCollapses">
        <div className="collapseDescription">
          <Collapse title="Description" content={description}/>
        </div>
        <div className="collapseEquipments">
          <Collapse title="Équipements" content={equipments}/>
        </div>
      </section>
    </div>
  )

}

export default Lodgings