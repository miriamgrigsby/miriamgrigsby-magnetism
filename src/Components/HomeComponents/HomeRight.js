import React from 'react'
import Articles from './HomeRightComponents/Articles'
import NasaIframe from './HomeRightComponents/NasaIframe'
import SEM from './HomeRightComponents/SEM'
import Microscope from './HomeRightComponents/Microscope'
import Demagnetizer from './HomeRightComponents/Demagnetizer'
import AGFM from './HomeRightComponents/AGFM'
import Tech from './HomeRightComponents/Tech'

const HomeRight = () => {

    const [techName, setTechName] = React.useState("");

    const handleScroll = (event) => {
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

    const handleTechClicks = (event) => {
        {
            techName === ""
                ? setTechName(event.target.alt)
                : setTechName("")
        }
    }

    return (
        <div className="home-right">
            <div className="top-right">
                <NasaIframe />
                <div className="tech" onScroll={handleScroll}>
                    <h2 id="tech">Tech</h2>
                    {
                        techName === "Scanning Electron Microscope"
                            ? <>
                                <div id="techName">
                                    <SEM handleTechClicks={handleTechClicks} />
                                    <button id="techNameHeader">{techName}</button>
                                </div>
                            </>
                            :
                            techName === "Microscope"
                                ? <> <div id="techName">
                                    <Microscope handleTechClicks={handleTechClicks} />
                                    <button id="techNameHeader">{techName}</button>
                                </div></>
                                :
                                techName === "Demagnetizer"
                                    ? <> <div id="techName">
                                        <Demagnetizer handleTechClicks={handleTechClicks} />
                                        <button id="techNameHeader">{techName}</button>
                                    </div></>
                                    :
                                    techName === "Alternative Gradient Field Magnetometer"
                                        ? <> <div id="techName">
                                            <AGFM handleTechClicks={handleTechClicks} />
                                            <button id="techNameHeader">{techName}</button>
                                        </div></>
                                        :

                                        <>
                                            <Tech handleTechClicks={handleTechClicks} />
                                        </>
                    }
                </div>
            </div>
            <Articles />
        </div>
    )
}

export default HomeRight