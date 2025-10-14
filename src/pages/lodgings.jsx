import {useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
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
  
  const navigate = useNavigate()

  useEffect(() => {
    if (currentLocation === undefined) {
      navigate('/notFound')
    }
  }, [currentLocation, navigate])

  if (currentLocation === undefined) {
    return null; // or a loading spinner
  }

  const { pictures, title, location, tags, host, rating, equipments, description } = currentLocation

  const tagComponents = tags.map((tag, i) => {
    return <Tag key={i} label={tag} />
  })

  const equipmentList = equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    )
  });

  return (
    <>
      <div className="lodgings">
        <div className="lodgingsCarousel">
          <Carousel slider={pictures}/>
        </div>
        <section className="lodgingsFeatures">
          <div className="lodgingsTitleLocation">
            <h1>{title}</h1>
            <h2>{location}</h2>
            <div className="lodgingsTags">{tagComponents}</div>          
          </div>
          <div className="lodgingsHostings">
            <div className="host">
              <span className="hostName">{host.name}</span>
              <img className="hostImg" src={host.picture} alt=""></img>
            </div>
            <div className="rate">
              < Rate grade={rating}/>
            </div>
          </div>
        </section>
        <section className="detailsCollapses">
          <div className="collapseDescription">
            <Collapse title="Description" content={description}/>
          </div>
          <div className="collapseEquipments">
            <Collapse title="Équipements" content={equipmentList}/>
          </div>
        </section>
      </div>
    </>
  )
}

export default Lodgings