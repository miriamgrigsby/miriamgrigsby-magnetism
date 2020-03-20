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
            element.style.borderBottom = "1px solid whitesmoke"
        } else {
            element.style.borderBottom = "none"
        }
        if (element.scrollTop !== 0) {
            element.style.borderTop = "none"
        } else {
            element.style.borderTop = "1px solid whitesmoke"
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
            <div className="all-paleomag-home">
                <div className="home-left">
                    <div className="about-paleomag">
                        <div id="paleomag-image"></div>
                        <div id="paleomag-info">
                            <h2 id="paleomag-title">Explore Paleomagnetism</h2>
                            <div>Explore Paleomagnetism by clicking on the links below.</div>
                            <div id="paleomag-links">
                                <button id="what-is-paleomag" className="paleomag-more-info" onClick={this.handleSetURL}
                                    data-url="https://www.youtube.com/embed/VibHlgMvECc">Paleomagnetism</button>
                                <button id="implications-of-paleomag" className="paleomag-more-info" onClick={this.handleSetURL}
                                    data-url="https://science.jrank.org/pages/4990/Paleomagnetism-Paleomagnetism-plate-tectonic-theory.html">Implications of Paleomagnetism</button>
                                <button id="paleomag-record" className="paleomag-more-info" onClick={this.handleSetURL} data-url="https://personal.utdallas.edu/~pujana/oceans/mag.html">How rocks record Paleomagnetic Data </button>
                                <button id="true-polar-wander" className="paleomag-more-info" onClick={this.handleSetURL} data-url="https://courses.seas.harvard.edu/climate/eli/Courses/EPS281r/Sources/Polar-wander/more/True-polar-wander-Wikipedia.pdf">True Polar Wander</button>
                                <button id="geomag-vs-paleomag" className="paleomag-more-info" onClick={this.handleSetURL}
                                    data-url="https://www.youtube.com/embed/0rGz862VPRo">Bow Shock</button>
                                <button id="magnetic-minerals" className="paleomag-more-info" onClick={this.handleSetURL} data-url="https://www.naturalhistorymag.com/naturenet/291850/magnetic-minerals" >Magnetic Minerals</button>
                                {
                                    this.state.modalClicked == true
                                        ? <WhatIsPaleomagModal handleClick={this.handleClick} clickedURL={this.state.clickedURL} clickedHeader={this.state.clickedHeader} handleReset={this.handleReset} />
                                        : null
                                }
                            </div>
                        </div>
                    </div>

                    <div className="magneto-box">
                        <div id="magneto-title">Magnetotactic Bacteria
                            <div id="camera-image" onClick={this.handleSetURL} data-url="https://phys.org/news/2019-07-microbiologists-mystery-compass-needle-magnetic.html">Magnetotactic Bacteria</div>
                        </div>
                        <img id="magneto-img"></img>
                    </div>
                </div>

                <div className="home-right">
                    <div className="top-right">
                        <div className="nasa">
                            <Iframe url="https://www.youtube.com/embed/lWHxmJf6U3M"

                                // https://cors-anywhere.herokuapp.com/https://www.nasa.gov
                                width="100%"
                                height="98%"
                                display="initial"
                            />

                        </div>

                        <div className="tech" onScroll={this.handleScroll}>
                            <h2 id="tech">Tech</h2>
                            {
                                this.state.techName === "Scanning Electron Microscope"
                                    ? <>
                                        <div id="techName">
                                            <img src="https://lh3.googleusercontent.com/proxy/Swm9ioMzNF1RhTybC4kqo34vEPxSGYTmdpey6LVAvI0r8dBbF9cFBV9J_WV2KNYV08tKZeEQwVODhesYinssSO4c-KppRp9_zOLJOMulntV6PXjof9qKBWXoXGx4qk3nxKeeIgYfIA" className="tech-popup"></img>
                                            <img src="https://sites.lsa.umich.edu/emal/wp-content/uploads/sites/553/2017/10/BSE1.png" className="tech-popup"></img>
                                            <button id="close-tech-popup" onClick={this.handleTechClicks}></button>
                                            <img src="https://i.pinimg.com/originals/65/dd/0d/65dd0d398d08e8008d3528e8ed0fbe18.jpg" className="tech-popup"></img>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/M0096D_024.tif/lossy-page1-440px-M0096D_024.tif.jpg" className="tech-popup"></img>
                                            <button id="techNameHeader">{this.state.techName}</button>
                                        </div>
                                    </>
                                    :
                                    this.state.techName === "Microscope"
                                        ? <> <div id="techName">
                                            <img src="https://www.researchgate.net/profile/M_Macouin/publication/281594025/figure/fig6/AS:296584425295894@1447722645447/Photomicrographs-under-reflected-light-microscopy-of-subhedral-crystals-of-magnetite-Mt.png" className="tech-popup"></img>
                                            <img src="https://lh3.googleusercontent.com/proxy/8aqDGdY_qDNl26a6adrYwxnrw5n0Ko20WM_NmVvKhfvFxI97reyH3UANwSH92Im3R2yBPXWbY87mRF40AAcXnryHlshg4nNKh1RaaS4M9cfMHpTOIMi2T1Ld3_1RoBXTs-Y" className="tech-popup"></img>
                                            <button id="close-tech-popup" onClick={this.handleTechClicks}></button>
                                            <img src="https://www.researchgate.net/profile/Diamar_Pechersky/publication/251399498/figure/fig4/AS:669093304729609@1536535683606/Microscope-images-of-grains-of-titanomagnetite-in-sample-Ts9008-1-a-b-grains-of.png" className="tech-popup"></img>
                                            <img src="https://www.alexstrekeisen.it/immagini/vulc/ilmenite2013(8).jpg" className="tech-popup"></img>
                                            <button id="techNameHeader">{this.state.techName}</button>
                                        </div></>
                                        :
                                        this.state.techName === "Demagnetizer"
                                            ? <> <div id="techName">
                                                <img src="https://lh3.googleusercontent.com/proxy/0FBEdHPxq7c-2B6WXG6x92c7SgWAOTvNtzKGnZRAYpbFCnYTw7AwbBIeIszGSG7V8o4g127ceRpuAHYytELzldQ5gbVXowSEcbFf0IZk" className="tech-popup"></img>
                                                <img src="https://www.researchgate.net/profile/Fernando_Henriquez/publication/254756502/figure/fig6/AS:668218679099408@1536327156650/Orthogonal-vector-plots-of-remanent-magnetization-Zijderveld-1967-for-representative.png" className="tech-popup"></img>
                                                <button id="close-tech-popup" onClick={this.handleTechClicks}></button>
                                                <img src="https://www.watelectronics.com/wp-content/uploads/Ferromagnetic-material-magnetization.png" className="tech-popup"></img>
                                                <img src="https://www.researchgate.net/profile/Hamidreza_Shirzadfar/publication/265472011/figure/fig19/AS:671531164266521@1537116914552/Typical-Hysteresis-curves-for-hard-low-and-soft-magnetic-materials-Hysteresis-loop-is.ppm" className="tech-popup"></img>
                                                <button id="techNameHeader">{this.state.techName}</button>
                                            </div></>
                                            :
                                            this.state.techName === "Alternative Gradient Field Magnetometer"
                                                ? <> <div id="techName">
                                                    <img src="https://lh3.googleusercontent.com/proxy/scuBoyjfj_sPWJVzo5iBSdyRfIR3oqFSbij6WR0q3BNeP-_T2Z39T0DSlQO_Y0ZuWQje9HaFYZ1VRBUWby44hpOI" className="tech-popup"></img>
                                                    <img src="https://www.researchgate.net/profile/Maria_Francesconi/publication/44579505/figure/fig4/AS:601586736853007@1520440863669/Magnetic-susceptibility-c-versus-temperature-data-with-fitting-based-on-a.png" className="tech-popup"></img>
                                                    <button id="close-tech-popup" onClick={this.handleTechClicks}></button>
                                                    <img src="https://www.researchgate.net/profile/Petr_Marcon/publication/267558066/figure/fig2/AS:669297449914370@1536584355129/Principle-of-SQUID-magnetometer.png" className="tech-popup"></img>
                                                    <img src="https://d3i71xaburhd42.cloudfront.net/1f4b6ba9947e8c79db78e9ddf9ba297a620c9bde/2-Figure1-1.png" className="tech-popup"></img>
                                                    <button id="techNameHeader">{this.state.techName}</button>
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
                    </div>
                    <div className="articles">
                        <h2 id="articles">Articles</h2>
                        <div class="gcse-search"></div>
                    </div>

                </div>





            </div>
        )
    }
}

export default AboutPaleomag
