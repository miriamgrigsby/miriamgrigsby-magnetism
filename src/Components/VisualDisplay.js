import React from 'react'
import { useHistory } from "react-router-dom";

const VisualDisplay = () => {
    const history = useHistory();
    return (
        <div className="visual-display">
            <div id="logo" onClick={() => history.push("/home")}></div>
            <h1>visual display</h1>
        </div>
    )
}

export default VisualDisplay
