import React from 'react'

const PaleomagInfo = ({ handleSetURL}) => {

    const handleButtonClick = (event) => {
        handleSetURL(event)
    }

    return (
        <>
            <button 
            id="what-is-paleomag" 
            className="paleomag-more-info" 
            onClick={handleButtonClick}
            data-url="https://www.youtube.com/embed/VibHlgMvECc"
            >Paleomagnetism
            </button>

            <button 
            id="implications-of-paleomag" 
            className="paleomag-more-info" 
            onClick={handleButtonClick}
            data-url="https://science.jrank.org/pages/4990/Paleomagnetism-Paleomagnetism-plate-tectonic-theory.html"
            >Implications of Paleomagnetism
            </button>

            <button 
            id="paleomag-record" 
            className="paleomag-more-info" 
            onClick={handleButtonClick} 
            data-url="https://personal.utdallas.edu/~pujana/oceans/mag.html"
            >How rocks record Paleomagnetic Data
            </button>

            <button 
            id="true-polar-wander" 
            className="paleomag-more-info" 
            onClick={handleButtonClick} 
            data-url="https://courses.seas.harvard.edu/climate/eli/Courses/EPS281r/Sources/Polar-wander/more/True-polar-wander-Wikipedia.pdf"
            >True Polar Wander
            </button>

            <button 
            id="geomag-vs-paleomag" 
            className="paleomag-more-info" 
            onClick={handleButtonClick}
            data-url="https://www.youtube.com/embed/0rGz862VPRo"
            >Bow Shock
            </button>

            <button 
            id="magnetic-minerals" 
            className="paleomag-more-info" 
            onClick={handleButtonClick} 
            data-url="https://www.naturalhistorymag.com/naturenet/291850/magnetic-minerals"
            >Magnetic Minerals
            </button>
        </>
    )
}

export default PaleomagInfo
