import React from 'react'
import LinkButtons from './LinkButtons'

const AboutMe = () => {
    return (
        <div>
            <LinkButtons />
            <div className="about-me">
                <div className="top-about-me">
                    <h1 id="aboutme-title"> Miriam Grigsby</h1>
                    <h1 id="aboutme-title2"> Full-stack developer</h1>
                    <div id="about-me-buttonDiv">
                        <button id="about-me-button">About Me</button>
                        <img></img>
                    </div>
                </div>
                <div className="middle-about-me">
                    
                </div>
            </div>

        </div>
    )
}

export default AboutMe
