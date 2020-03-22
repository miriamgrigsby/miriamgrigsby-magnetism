import React from 'react'
import A from './Figure1Images/A.png'
import B from './Figure1Images/B.png'
import C from './Figure1Images/C.png'
import D from './Figure1Images/D.png'
import E from './Figure1Images/E.png'
import F from './Figure1Images/F.png'

const Figure1Div = () => {
    return (
        <section className="section">
            <h2>Materials and Methods</h2>
            <p id="paragraph">
                <div id="figure1-div">
                    <div id="figure1-images">
                        <img src={A} className="sized-figure1-images"></img>
                        <img src={B} className="sized-figure1-images"></img>
                        <img src={C} className="sized-figure1-images"></img>
                        <img src={D} className="sized-figure1-images"></img>
                        <img src={E} className="sized-figure1-images"></img>
                        <img src={F} className="sized-figure1-images"></img>
                    </div>
                    <h3 id="title-figure1">Figure 1</h3>
                </div>
            </p>
        </section>
    )
}

export default Figure1Div
