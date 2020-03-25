import React from 'react'
import { useHistory } from "react-router-dom";
import logo from '../PhotoResources/logo.gif'
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

const LinkButtons = () => {

    const history = useHistory();

    const handleClick = (event) => {
        history.push(`/${event.target.id}`)
    }

    const [visibility, onVisibilityChange] = React.useState(false)
    
    const onSelect = (key) => {
        console.log(`${key.key} selected`)
        history.push(`/${key.key}`)
    }

    const onVisibleChange = (visible) => {
        onVisibilityChange(visible)
    }

    const menu2 = (
        <Menu onSelect={onSelect} >
        <MenuItem key="about-me" >Profile</MenuItem>
        
        </Menu>
    )

    const menu = (
        <Menu onSelect={onSelect} >
            <MenuItem key="about-me" >Profile</MenuItem>
            <Divider/>
            <MenuItem key="resume">Resume</MenuItem>
            <Divider/>
            <MenuItem key="projects">Projects</MenuItem>
        </Menu>
    );

   
    

    return (
        <div className="homepage">
            <img src={logo} id="logo" onClick={() => history.push("/home")}></img>
            <div id="top-links">
                <button id="analysis" onClick={handleClick}>
                    Magnetic Analysis
                </button>
                <button id="geodynamo" onClick={handleClick}>
                    Geodynamo
                </button>
                <button id="visual-display" onClick={handleClick}>
                    Visualization
                </button>
                <Dropdown
                trigger={['hover']}
                onVisibleChange={onVisibleChange}
                visible={visibility}
                closeOnSelect={true}
                overlay={menu}
                animation="slide-up"
                // overlayClassName="rc-dropdown-menu"
            >
                <button id="about-me">
                    About Me
                </button>
            </Dropdown>
                {/* <button id="about-me" onClick={handleClick}>
                    About Me
                </button> */}
                <button id="contact" onClick={handleClick}>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default LinkButtons
