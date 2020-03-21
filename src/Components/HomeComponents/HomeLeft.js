import React, { Component } from 'react'
import PaleomagInfo from './HomeLeftComponents/PaleomagInfo'
import WhatIsPaleomagModal from './HomeLeftComponents/WhatIsPaleomagModal';
import MagnetotacticBacteria from './HomeLeftComponents/MagnetotacticBacteria';

class HomeLeft extends Component {

    state = {
        modalClicked: false,
        clickedURL: "",
        clickedHeader: "",
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

    render() {
        return (
            <div className="home-left">
                <div className="about-paleomag">
                    <div id="paleomag-image"></div>
                    <div id="paleomag-info">
                        <h2 id="paleomag-title">Explore Paleomagnetism</h2>
                        <div>Explore Paleomagnetism by clicking on the links below.</div>
                        <div id="paleomag-links">
                            <PaleomagInfo handleSetURL={this.handleSetURL} />
                            {
                                this.state.modalClicked == true
                                    ? <WhatIsPaleomagModal
                                        handleClick={this.handleClick}
                                        clickedURL={this.state.clickedURL}
                                        clickedHeader={this.state.clickedHeader}
                                        handleReset={this.handleReset} />
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <MagnetotacticBacteria handleSetURL={this.handleSetURL} />
            </div>
        )
    }
}

export default HomeLeft
