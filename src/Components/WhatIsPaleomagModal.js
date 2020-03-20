import React from 'react'
import Modal from 'react-modal'
import Iframe from 'react-iframe'


const customStyles = {
    content: {
        backgroundImage: "url(" + "https://www.texturepalace.com/gallery/concrete/120913/concrete-texture-16.jpg" + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
};

const WhatIsPaleomagModal = ({handleClick, clickedURL, clickedHeader, handleReset}) => {
    const [modalIsOpen, setIsOpen] = React.useState(true);

    const closeModal = () => {
        setIsOpen(false)
        handleClick()
        handleReset()
    }


    return (
        <div>
            <Modal
                contentLabel={"Example Modal"}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2 className="modal-header">{clickedHeader}</h2>
                <button onClick={closeModal} id="close-paleomag-modal"></button>
                <Iframe url={clickedURL}
                        width="95%"
                        height="92%"
                        display="initial"
                        id="modal-iframe"
                        name="ModalIframe"
                        />
            </Modal>
        </div>
    )
}

export default WhatIsPaleomagModal
