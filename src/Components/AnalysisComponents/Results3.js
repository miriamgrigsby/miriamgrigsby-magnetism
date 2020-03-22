import React from 'react'

const Results3 = () => {
    return (
        <section className="section">
            <p id="paragraph">
            An alternating gradient field magnetometer (AGFM) allows for magnetic measurements of a sample, including the sample’s coercivity and magnetization. To do this, a sample is suspended between magnets that produce a field, and any minute changes in the position of the sample within the field are recorded. The data is used to create a hysteresis loop that plots magnetization over coercivity. The shape of the loop can be used to predict what crystal domains are present--single domain crystals are smaller and better magnetic recorders, while multi-domain crystals are larger and comparatively worse magnetic recorders. Mixed domain states can exist, as well as pseudo-single domain states, where the crystals behave like single domain but are not small enough to be truly single domain.
            </p>

            <p id="paragraph">
            Our data was indicative of pseudo-single domain and mixed-domain crystals based on the loops’ shapes. Pseudo-single domain loops are skinny because the crystals are (not?) good magnetic recorders, while multi-domain loops are wasp-waisted, or skinnier near the origin and wider as it gets farther out. The example wasp-waisted hysteresis loop is from Tarduno & Myers, 1994.
            </p>
        </section>
    )
}

export default Results3
