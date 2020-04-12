import React from 'react'
import LinkButtons from './LinkButtons'
import ContinueButton from '../PhotoResources/continue-arrow.png'


const AboutMe = () => {
    
    const scrollDown = () => {
        const scroller = document.querySelector('#middle-about-me')
       scroller.scrollIntoView({behavior: "smooth"})
    }


    return (
        <div>
            <LinkButtons />
            <div className="about-me">
                <div className="top-about-me">
                    <h1 id="aboutme-title"> Miriam Grigsby</h1>
                    <h1 id="aboutme-title2"> Full-stack developer</h1>
                    <div id="about-me-buttonDiv">
                        <button id="about-me-button" onClick={scrollDown}>About Me</button>
                        <img id="continue-button-image" src={ContinueButton} onClick={scrollDown}></img>
                    </div>
                </div>
                <div id="middle-about-me">
                    <h1>WTF</h1>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
