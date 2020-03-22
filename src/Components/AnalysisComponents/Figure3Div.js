import React from 'react'
import A3 from './Figure3Images/A3.png'
import B3 from './Figure3Images/B3.png'
import C3 from './Figure3Images/C3.png'
import D3 from './Figure3Images/D3.png'
import E3 from './Figure3Images/E3.png'
import F3 from './Figure3Images/F3.png'
import H3 from './Figure3Images/H3.png'
import I3 from './Figure3Images/I3.png'
import J3 from './Figure3Images/J3.png'
import K3 from './Figure3Images/K3.png'

const Figure3Div = () => {
    return (
        <section className="outer-figure3">
            <h2 id="results">Results</h2>
            <div id="figure3-div">
                <h2 id="title-figure2">SEM Tube</h2>
                <div id="figure3-images">
                    <img src={A3} className="sized-figure3-images"></img>
                    <img src={B3} className="sized-figure3-images"></img>
                    <img src={C3} className="sized-figure3-images"></img>
                    <img src={D3} className="sized-figure3-images"></img>
                    <img src={E3} className="sized-figure3-images"></img>
                    <img src={F3} className="sized-figure3-images"></img>
                </div>
                <div id="figure3-images2">
                    <img src={H3} className="sized-figure3-images2"></img>
                    <img src={I3} className="sized-figure3-images2"></img>
                    <img src={J3} className="sized-figure3-images2"></img>
                    <img src={K3} className="sized-figure3-images2"></img>
                </div>
                <h3 id="title-figure2">Figure 3</h3>
            </div>

        </section>
    )
}

export default Figure3Div
