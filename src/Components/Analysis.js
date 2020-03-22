import React from 'react'
import LinkButtons from './LinkButtons'
import References from './AnalysisComponents/References'
import Abstract from './AnalysisComponents/Abstract'
import Introduction from './AnalysisComponents/Introduction'
import Figure1Div from './AnalysisComponents/Figure1Div'
import Introduction2 from './AnalysisComponents/Introduction2'
import Figure3Div from './AnalysisComponents/Figure3Div'
import Results from './AnalysisComponents/Results'
import Figure4Div from './AnalysisComponents/Figure4Div'
import Results2 from './AnalysisComponents/Results2'
import Figure5Div from './AnalysisComponents/Figure5Div'
import Figure6Div from './AnalysisComponents/Figure6Div'
import Results3 from './AnalysisComponents/Results3'
import Figure7Div from './AnalysisComponents/Figure7Div'
import Results4 from './AnalysisComponents/Results4'
import Discussion from './AnalysisComponents/Discussion'

const Analysis = () => {
    const [abstract, setAbstract] = React.useState(true);

    const handleClick = (event) => {
        setAbstract(!abstract)
        {
            event.target.innerText === "Continue Reading"
            ? event.target.innerText = ""
            : event.target.innerText = "Continue Reading"
        }
    }

    return (
        <div>
            <LinkButtons />
            <div className="analysis-background"></div>
            {
                abstract === true 
                    ? <div className="just-abstract">
                         <Abstract />
                         <button onClick={handleClick} id="toggle-readMore">Continue Reading</button>
                        </div>
                    : <div className="analysis">
                        <button onClick={handleClick} id="close-paper"></button>
                        <h1 className="analysis-intro">Magnetic Analysis of Tuyere Blow Pipes from the Limpopo River Valley</h1>
                        <h2 className="analysis-intro">Miriam Grigsby, Kyrsten Johnston, et al.</h2>

                        <Abstract />
                        <Introduction />
                        <Figure1Div />
                        <Introduction2 />
                        <Figure3Div />
                        <Results />
                        <Figure4Div />
                        <Results2 />
                        <Figure5Div />
                        <Figure6Div />
                        <Results3 />
                        <Figure7Div />
                        <Results4 />
                        <Discussion />
                        
                        <br></br>
                        <br></br>
                        <br></br>

                        <References />
                    </div>
                 
            }
        </div>
    )
}

export default Analysis
