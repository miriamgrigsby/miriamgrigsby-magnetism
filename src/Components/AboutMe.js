import React from 'react'
import LinkButtons from './LinkButtons'
import ContinueButton from '../PhotoResources/continue-arrow.png'
import tenacious from '../PhotoResources/tenacious.png'
import positive from '../PhotoResources/positive.png'
import curious from '../PhotoResources/curious.png'
import efficient from '../PhotoResources/efficient.png'
import honest from '../PhotoResources/honest.png'

const AboutMe = () => {
    
    const scrollDown = () => {
        const scroller = document.querySelector('#middle-about-me')
       scroller.scrollIntoView({behavior: "smooth"})
    }

    const rotateArrow = () => {
        const arrow = document.querySelector('#continue-button-image')
        arrow.style.transform = "rotate(90deg)"
    }

    const rotateArrowBack = () => {
        const arrow = document.querySelector('#continue-button-image')
        arrow.style.transform = "rotate(0deg)"
    }

    return (
        <div>
            <div className="about-me">
                <div className="top-about-me">
                    <h1 id="aboutme-title"> Miriam Grigsby</h1>
                    <h1 id="aboutme-title2"> Full-stack developer</h1>
                    <div id="about-me-buttonDiv">
                        <button id="about-me-button" onClick={scrollDown}>About Me</button>
                        <img id="continue-button-image" src={ContinueButton} onMouseEnter={rotateArrow} onMouseLeave={rotateArrowBack} onClick={scrollDown}></img>
                    </div>
                </div>
                <LinkButtons />
                <div id="middle-about-me">
                    <div id="middle-about-me-title">ABOUT</div>
                    <div id="qualities-div">
                        <div id="tenacious-div">
                                <img src={tenacious} id="tenacious-png"></img>
                                <h2 id="about-meh2">TENACIOUS</h2>
                                <h4 id="about-meh5">Work Hard to get the job done right the first time</h4>
                        </div>
                        <div id="positive-div">
                            <img src={positive} id="positive-png"></img>
                            <h2 id="about-meh2">POSITIVE</h2>
                            <h4 id="about-meh5"> Happy demeanor and optimistic: anything is possible</h4>
                        </div>
                        <div id="curious-div">
                            <img src={curious} id="tenacious-png"></img>
                            <h2 id="about-meh2">CURIOUS</h2>
                            <h4 id="about-meh5"> Always interested in increasing depth and breadth of knowledge</h4>
                        </div>
                        <div id="efficient-div">
                            <img src={efficient} id="tenacious-png"></img>
                            <h2 id="about-meh2">EFFICIENT</h2>
                            <h4 id="about-meh5">Maximizing productivity, minimizing effort in a competent manner </h4>
                        </div>
                        <div id="honest-div">
                            <img src={honest} id="tenacious-png"></img>
                            <h2 id="about-meh2">HONEST</h2>
                            <h4 id="about-meh5">Loyal and truthful even to a fault: strive to always maintain transparency</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
