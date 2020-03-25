import React from 'react'
import LinkButtons from './LinkButtons'
import Antiquity from '../PhotoResources/antiquity.pdf'
import Iframe from 'react-iframe'

const PoleReversal = () => {
    return (
        <div className="geodynamo">
            <LinkButtons />
            <div className="antiquity-background">
            <Iframe 
                className="antiquity-iframe"
                url={Antiquity}
                width="100%"
                height="100%"
                display="initial"
            />
            </div>
        </div>
    )
}

export default PoleReversal