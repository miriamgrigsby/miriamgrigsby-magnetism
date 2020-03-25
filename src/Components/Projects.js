import React from 'react'
import { useHistory } from "react-router-dom";
import logo from '../PhotoResources/logo.gif'

const Projects = () => {
    const history = useHistory();
    return (
        <div className="projects">
            <img src={logo} id="logo" onClick={() => history.push("/home")}></img>
        </div>
    )
}

export default Projects
