import React from 'react'
import Iframe from 'react-iframe'

const NasaIframe = () => {
    return (
        <div className="nasa">
            <Iframe 
                url="https://www.youtube.com/embed/lWHxmJf6U3M"
                width="100%"
                height="99%"
                display="initial"
            />
        </div>
    )
}

export default NasaIframe
