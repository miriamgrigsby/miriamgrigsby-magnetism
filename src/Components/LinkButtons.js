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

    const menu = (
        <Menu onSelect={onSelect} >
            <MenuItem key="home">About Paleomag</MenuItem>
            <Divider />
            <MenuItem key="analysis" >Magnetic Analysis</MenuItem>
            <Divider />
            <MenuItem key="geodynamo">Geodynamo</MenuItem>
            <Divider />
            <MenuItem key="visual-display">Visualization</MenuItem>
        </Menu>
    );




    return (
        <div className="homepage">
            <img src={logo} id="logo" onClick={() => history.push("/about-me")}></img>
            <div id="top-links">
                <button id="about-me" onClick={handleClick}>
                    About Me
                </button>
                <button id="project" onClick={handleClick}>
                    Projects
                </button>
                <Dropdown
                    trigger={['hover']}
                    onVisibleChange={onVisibleChange}
                    visible={visibility}
                    closeOnSelect={true}
                    overlay={menu}
                    animation="slide-up"
                >
                    <button id="home">
                        Paleomagnetism
                </button>
                </Dropdown>
                <button id="resume" onClick={handleClick}>
                    Resume
                </button>
                <button id="contact" onClick={handleClick}>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default LinkButtons
