import React from 'react'
import A6 from './Figure6Images/A6.png'
import B6 from './Figure6Images/B6.png'

const Figure6Div = () => {
    return (
        <section className="outer-figure6">
        <div id="figure6-div">
            <h2 id="title-figure2">AGFM</h2>
            <div id="figure6-images">
                <img src={A6} className="sized-figure6-images"></img>
                <img src={B6} className="sized-figure6-images"></img>
            </div>
            <h3 id="title-figure2">Figure 6</h3>
        </div>

</section>
    )
}

export default Figure6Div