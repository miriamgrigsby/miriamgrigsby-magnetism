import React from 'react'
import sem1 from './SEMPhotos/sem1.png'
import sem2 from './SEMPhotos/sem2.png'
import sem3 from './SEMPhotos/sem3.png'
import sem4 from './SEMPhotos/sem4.png'

const SEM = ({handleTechClicks}) => {
    return (
        <>
            <img src={sem1} className="tech-popup"></img>
            <img src={sem2} className="tech-popup"></img>
            <button id="close-tech-popup" onClick={handleTechClicks}></button>
            <img src={sem3} className="tech-popup"></img>
            <img src={sem4} className="tech-popup"></img>
        </>
    )
}

export default SEM
