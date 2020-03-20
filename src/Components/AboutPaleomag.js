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
        clickedHeader: "",
        techName: ""
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

    handleTechClicks = (event) => {
            {
                this.state.techName === ""
                ? this.setState({
                    techName: event.target.alt
                })
                : this.setState({
                    techName: ""
                })
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
                            <button id="what-is-paleomag"  className="paleomag-more-info" onClick={this.handleSetURL}
                            data-url="http://www.geo.mtu.edu/KeweenawGeoheritage/IRKeweenawRift/Paleomagnetism.html">Paleomagnetism</button>
                            <button id="implications-of-paleomag" className="paleomag-more-info" onClick={this.handleSetURL}
                            data-url="https://science.jrank.org/pages/4990/Paleomagnetism-Paleomagnetism-plate-tectonic-theory.html">Implications of Paleomagnetism</button>
                            <button id="paleomag-record"  className="paleomag-more-info" onClick={this.handleSetURL} data-url="https://personal.utdallas.edu/~pujana/oceans/mag.html">How rocks record Paleomagnetic Data </button>
                            <button id="true-polar-wander" className="paleomag-more-info" onClick={this.handleSetURL} data-url="https://courses.seas.harvard.edu/climate/eli/Courses/EPS281r/Sources/Polar-wander/more/True-polar-wander-Wikipedia.pdf">True Polar Wander</button>
                            <button id="geomag-vs-paleomag" className="paleomag-more-info" onClick={this.handleSetURL} 
                            data-url="https://www.youtube.com/embed/0rGz862VPRo">Bow Shock</button>
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
                    {
                        this.state.techName === "Scanning Electron Microscope"
                        ?  <> <div id="techName">
                            <img src="https://lh3.googleusercontent.com/proxy/Swm9ioMzNF1RhTybC4kqo34vEPxSGYTmdpey6LVAvI0r8dBbF9cFBV9J_WV2KNYV08tKZeEQwVODhesYinssSO4c-KppRp9_zOLJOMulntV6PXjof9qKBWXoXGx4qk3nxKeeIgYfIA" className="tech-popup"></img>
                            <img src="https://sites.lsa.umich.edu/emal/wp-content/uploads/sites/553/2017/10/BSE1.png" className="tech-popup"></img>
                            <button id="close-tech-popup" onClick={this.handleTechClicks}></button>
                            <img src="https://i.pinimg.com/originals/65/dd/0d/65dd0d398d08e8008d3528e8ed0fbe18.jpg"  className="tech-popup"></img>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_LNECuq3ATdjEILesyiig0APuY2BuRycN0lrnLdl-UjVqX3IQ" className="tech-popup"></img>
                            </div></>
                        : 
                    
                    <>
                    <img id="sem" src={sem} alt="Scanning Electron Microscope" onClick={this.handleTechClicks}></img>
                    <img id="microscope" src={microscope} alt="Microscope" onClick={this.handleTechClicks}></img>
                    <img id="demag" src={demag} alt="Demagnetizer" onClick={this.handleTechClicks}></img>
                    <img id="agfm" src={agfm} alt="Alternative Gradient Field Magnetometer" onClick={this.handleTechClicks}></img>
                   
                    </>
                    }
                </div>
                <div className="articles">
                    <h2 id="articles">Articles</h2>
                    <div class="gcse-search"></div>
                </div>
                <div className="magneto-box">
                        <div id="magneto-title">Magnetotactic Bacteria
                            <div id="camera-image" onClick={this.handleSetURL} data-url="https://phys.org/news/2019-07-microbiologists-mystery-compass-needle-magnetic.html">Magnetotactic Bacteria</div>
                        </div>
                    <img id="magneto-img"></img>
                </div>
            </>
        )
    }
}

export default AboutPaleomag
