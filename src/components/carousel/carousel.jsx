import React from "react"
import { useState } from "react"
import "./carousel.scss"

function Carousel({slider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const previousImg = () => {
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0) {
            setCurrentIndex(slider.length -1)
        }  
    }

    const nextImg = () => {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex === slider.length - 1) {
            setCurrentIndex(0)
        }
    }

    const image = slider[currentIndex]
    const indexImg = currentIndex +1
    const maxImg = slider.length

    return (
        <section className="carousel">
            <img className="carouselImg" src={image}></img>
            {slider.length > 1 &&
                <div className="carouselNav">
                    <div className="carouselChevrons">
                        <i onClick={previousImg} className="fa-solid fa-chevron-left" ></i>
                        <i onClick={nextImg} className="fa-solid fa-chevron-right" ></i>
                    </div>
                    <div className="carouselIndex">
                        <span>{indexImg}/{maxImg}</span>
                    </div>
                </div>
            }
        </section>
    )
    
}

export default Carousel