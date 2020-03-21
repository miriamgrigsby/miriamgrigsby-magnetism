import React from 'react'
import microscope1 from './MicroscopePhotos/microscope1.png'
import microscope2 from './MicroscopePhotos/microscope2.png'
import microscope3 from './MicroscopePhotos/microscope3.png'
import microscope4 from './MicroscopePhotos/microscope4.png'

const Microscope = ({handleTechClicks}) => {
    return (
        <>
            <img src={microscope1} className="tech-popup"></img>
            <img src={microscope2} className="tech-popup"></img>
            <button id="close-tech-popup" onClick={handleTechClicks}></button>
            <img src={microscope3} className="tech-popup"></img>
            <img src={microscope4} className="tech-popup"></img>
        </>
    )
}

export default Microscope
