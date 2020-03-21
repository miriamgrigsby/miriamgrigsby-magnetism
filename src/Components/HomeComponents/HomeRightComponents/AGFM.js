import React from 'react'
import magneto1 from './MagnetoPhotos/magneto1.png'
import magneto2 from './MagnetoPhotos/magneto2.png'
import magneto3 from './MagnetoPhotos/magneto3.png'
import magneto4 from './MagnetoPhotos/magneto4.png'

const AGFM = ({handleTechClicks}) => {
    return (
        <>
            <img src={magneto1} className="tech-popup"></img>
            <img src={magneto2} className="tech-popup"></img>
            <button id="close-tech-popup" onClick={handleTechClicks}></button>
            <img src={magneto3} className="tech-popup"></img>
            <img src={magneto4} className="tech-popup"></img>
        </>
    )
}

export default AGFM
