import React from 'react'
import Figure2Left from './Figure2Left'
import Figure2Right from './Figure2Right'

const Introduction2 = () => {
    return (
        <section className="section">
            <p id="paragraph2">
            The original tuyere sample had a thin glassy section on the outside ending in a knob (Fig. 1D), and another ring of glass on the inside of the tube (Fig. 1A). Two samples were taken, one from the knob (Fig. 1E) and another from the edge of the tube (Fig. 1B) The knob and tube samples were cut into thin sections for observation under the scanning electron microscope (Fig. 1C, F). Electron backscatter was also collected for these two samples. The regular SEM images can be used to study the surface of the sample by collecting electrons. thrown back at the machine. Electron backscatter is useful in determining composition, because it shows the sample in terms of density and can give percentages of elements in a specific area.
            </p>

            <div id="figure2-div">
                <Figure2Left />
                <Figure2Right />
            </div>
        </section>
    )
}

export default Introduction2