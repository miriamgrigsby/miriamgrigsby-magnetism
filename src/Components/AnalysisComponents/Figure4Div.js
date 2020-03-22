import React from 'react'
import A4 from './Figure4Images/A4.png'
import B4 from './Figure4Images/B4.png'
import C4 from './Figure4Images/C4.png'
import D4 from './Figure4Images/D4.png'
import E4 from './Figure4Images/E4.png'
import F4 from './Figure4Images/F4.png'
import G4 from './Figure4Images/G4.png'

const Figure4Div = () => {
    return (
        <section className="outer-figure4">
            <div id="figure4-div">
                <h2 id="title-figure2">Knob</h2>
                <div id="figure4-images">
                    <img src={A4} className="sized-figure4-images"></img>
                    <img src={B4} className="sized-figure4-images"></img>
                    <img src={C4} className="sized-figure4-images"></img>
                    <img src={D4} className="sized-figure4-images"></img>
                </div>
                <div id="figure4-images2">
                    <img src={E4} className="sized-figure4-images2"></img>
                    <img src={F4} className="sized-figure4-images2"></img>
                    <img src={G4} className="sized-figure4-images2"></img>
                </div>
                <h3 id="title-figure2">Figure 4</h3>
            </div>
        </section>
    )
}

export default Figure4Div
