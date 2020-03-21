import React from 'react'
import microscope from './MicroscopePhotos/microscope.png'
import sem from './SEMPhotos/sem.png'
import agfm from './MagnetoPhotos/agfm.png'
import demag from './DemagPhotos/demag.png'


const Tech = ({handleTechClicks}) => {
    return (
        <>
            <img id="sem" src={sem} alt="Scanning Electron Microscope" onClick={handleTechClicks}></img>
            <img id="microscope" src={microscope} alt="Microscope" onClick={handleTechClicks}></img>
            <img id="demag" src={demag} alt="Demagnetizer" onClick={handleTechClicks}></img>
            <img id="agfm" src={agfm} alt="Alternative Gradient Field Magnetometer" onClick={handleTechClicks}></img>
        </>
    )
}

export default Tech
