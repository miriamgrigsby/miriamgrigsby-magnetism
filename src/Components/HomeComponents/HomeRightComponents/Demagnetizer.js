import React from 'react'
import demag1 from './DemagPhotos/demag1.png'
import demag2 from './DemagPhotos/demag2.png'
import demag3 from './DemagPhotos/demag3.png'
import demag4 from './DemagPhotos/demag4.png'

const Demagnetizer = ({handleTechClicks}) => {
    return (
        <>
            <img src={demag1} className="tech-popup"></img>
            <img src={demag2} className="tech-popup"></img>
            <button id="close-tech-popup" onClick={handleTechClicks}></button>
            <img src={demag3} className="tech-popup"></img>
            <img src={demag4} className="tech-popup"></img>
        </>
    )
}

export default Demagnetizer
