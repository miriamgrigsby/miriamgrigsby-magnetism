import React, { Component } from 'react'
import WhatIsPaleomagModal from './WhatIsPaleomagModal';
import Iframe from 'react-iframe'
import microscope from './microscope.png'
import sem from './sem.png'
import agfm from './agfm.png'
import demag from './demag.png'

class AboutPaleomag extends Component {

    
    state = {
        modalClicked: false,
        clickedURL: "",
        clickedHeader: ""
    }

    
    handleSetURL = (event) => {
        this.setState({
            clickedURL: event.target.dataset.url,
            clickedHeader: event.target.innerText
        }, this.handleClick())
    }
    
    handleClick = () => {
        this.setState({
            modalClicked: !this.state.modalClicked,
        })
    }

    handleReset = () => {
        this.setState({
            clickedURL: "",
            clickedHeader: ""
        })
    }

    handleScroll = (event) => {
        const element = event.target
        if ((element.scrollHeight - element.scrollTop) <= element.clientHeight + 10) {
            element.style.borderBottom="1px solid whitesmoke"
        } else {
            element.style.borderBottom="none"
        }
        if (element.scrollTop !== 0) {
            element.style.borderTop="none"
        } else {
            element.style.borderTop="1px solid whitesmoke"
        }
        
    }

    render() {

        return (
            <>
                <div className="about-paleomag">
                    <div id="paleomag-image"></div>
                    <div id="paleomag-info">
                        <h2 id="paleomag-title">Explore Paleomagnetism</h2>
                        <div>Explore Paleomagnetism by clicking on the links below.</div>
                        <div id="paleomag-links">
                            <button id="what-is-paleomag"  className="paleomag-more-info" onClick={this.handleSetURL}>Paleomagnetism</button>
                            <button id="implications-of-paleomag" className="paleomag-more-info" onClick={this.handleSetURL}>Implications of Paleomagnetism</button>
                            <button id="paleomag-record"  className="paleomag-more-info" onClick={this.handleSetURL}>How rocks record Paleomagnetic Data </button>
                            <button id="true-polar-wander" className="paleomag-more-info" onClick={this.handleSetURL}>True Polar Wander</button>
                            <button id="geomag-vs-paleomag" className="paleomag-more-info" onClick={this.handleSetURL} >Geomagnetism vs. Paleomagnetism</button>
                            <button id="magnetic-minerals"  className="paleomag-more-info" onClick={this.handleSetURL} data-url="http://www.eniscuola.net/en/2017/01/09/at-the-origin-of-rocks-the-secrets-of-paleomagnetism/" >Magnetic Minerals</button>
                            {
                                this.state.modalClicked == true
                                    ? <WhatIsPaleomagModal handleClick={this.handleClick} clickedURL={this.state.clickedURL} clickedHeader={this.state.clickedHeader} handleReset={this.handleReset}/>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className="nasa">
                    <Iframe url="https://www.youtube.com/embed/lWHxmJf6U3M"
            
                    // https://cors-anywhere.herokuapp.com/https://www.nasa.gov
                        width="100%"
                        height="100%"
                        display="initial"
                        position="absolute" 
                        />
                     
                </div>
                <div className="tech" onScroll={this.handleScroll}>
                    <h2 id="tech">Tech</h2>
                    <>
                    <img id="sem" src={sem}></img>
                    <img id="microscope" src={microscope}></img>
                    <img id="demag" src={demag}></img>
                    <img id="agfm" src={agfm}></img>
                    </>
                </div>
                <div className="articles">
                    <h2 id="articles">Articles</h2>
                </div>
                <div className="relevant-blogs">
                    <h2 id="blogs">Relevant Blogs</h2>
                </div>
            </>
        )
    }
}

export default AboutPaleomag
