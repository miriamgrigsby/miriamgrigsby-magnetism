import React from 'react'
import { useHistory } from "react-router-dom";
import logo from '../PhotoResources/logo.gif'

const VisualDisplay = () => {
    const history = useHistory();
    return (
        <div className="visual-display">
            <img src={logo} id="logo" onClick={() => history.push("/home")}></img>
        </div>
    )
}

export default VisualDisplay
