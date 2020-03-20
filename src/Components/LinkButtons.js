import React from 'react'
import { useHistory } from "react-router-dom";

const LinkButtons = () => {
    const history = useHistory();
    const handleClick = (event) => {
        history.push(`/${event.target.id}`)
    }
    return (
        <div className="homepage">
            <div id="logo" onClick={() => history.push("/home")}></div>
            <div id="top-links">
                <button id="analysis" onClick={handleClick}>
                    Data Analysis
                </button>
                <button id="pole-reversal" onClick={handleClick}>
                    Pole Reversal
                </button>
                <button id="visual-display" onClick={handleClick}>
                    Visual Display
                </button>
                <button id="about-me" onClick={handleClick}>
                    About Me
                </button>
                <button id="contact" onClick={handleClick}>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default LinkButtons
