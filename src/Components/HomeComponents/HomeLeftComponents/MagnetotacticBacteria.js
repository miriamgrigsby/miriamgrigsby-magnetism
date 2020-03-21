import React from 'react'

const MagnetotacticBacteria = ({handleSetURL}) => {

    const handleClick = (event) => {
        handleSetURL(event)
    }
    return (
        <div className="magneto-box">
            <div id="magneto-title">Magnetotactic Bacteria
                <div id="camera-image" onClick={handleClick} data-url="https://phys.org/news/2019-07-microbiologists-mystery-compass-needle-magnetic.html">
                    Magnetotactic Bacteria
                </div>
            </div>
            <img id="magneto-img"></img>
        </div>
    )
}

export default MagnetotacticBacteria
