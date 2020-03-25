import React from 'react'
import LinkButtons from './LinkButtons'
import Miriam_Grigsby from '../PhotoResources/Miriam_Grigsby.pdf'
import Iframe from 'react-iframe'


const Resume = () => {
 

    return (
        <div>
            <LinkButtons />
            <div className="resume-background">
            <Iframe 
                className="resume-iframe"
                url={Miriam_Grigsby}
                width="100%"
                height="100%"
                display="initial"
            />
            </div>
        </div>
    )
}

export default Resume
