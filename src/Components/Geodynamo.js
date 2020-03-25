import React from 'react'
import LinkButtons from './LinkButtons'
import Antiquity from '../PhotoResources/antiquity.pdf'
import Iframe from 'react-iframe'

const PoleReversal = () => {

    const [abstract, setAbstract] = React.useState(true);

    const handleClick = (event) => {
        setAbstract(!abstract)
        {
            event.target.innerText === "Read"
                ? event.target.innerText = ""
                : event.target.innerText = "Read"
        }
    }


    return (
        <div className="geodynamo">
            <LinkButtons />
            <div className="antiquity-background">
                {
                    abstract === true
                        ? <div className="about-antiquity">
                            <section className="section">
                                <h2>Antiquity of the South Atlantic Anomaly</h2>
                                <p id="paragraph">
                                    The dramatic decay of dipole geomagnetic field intensity during the last 160 years coincides
                                    with changes in Southern Hemisphere (SH) field morphology and has motivated speculation
                                    of an impending reversal. Understanding these changes, however, has been limited by the lack
                                    of longer-term SH observations. Here we report the first archaeomagnetic curve from
                                    southern Africa (ca. 1000–1600 AD). Directions change relatively rapidly at ca. 1300 AD,
                                    whereas intensities drop sharply, at a rate greater than modern field changes in southern
                                    Africa, and to lower values. We propose that the recurrence of low field strengths reflects
                                    core flux expulsion promoted by the unusual core–mantle boundary (CMB) composition and
                                    structure beneath southern Africa defined by the African large low shear velocity province
                                    (LLSVP). Because the African LLSVP and CMB structure are ancient, this region may have
                                    been a steady site for flux expulsion, and triggering of geomagnetic reversals, for millions
                                    of years.
                    </p>
                            </section>
                            <button id="toggle-readMore2" onClick={handleClick}>Read</button>
                        </div>
                        : <>
                            <button onClick={handleClick} id="close-paper2"></button>
                            <Iframe
                                className="antiquity-iframe"
                                url={Antiquity}
                                width="100%"
                                height="100%"
                                display="initial"
                            />
                        </>
                }


            </div>
        </div>
    )
}

export default PoleReversal
