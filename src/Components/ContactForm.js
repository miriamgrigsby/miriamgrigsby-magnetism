import React from 'react'

const ContactForm = () => {
    return (
        <>
            <form className="contact-form">
                <input type="text" placeholder="Full Name, e.g. John Smith" id="form-input"/>
                <input type="text" placeholder="Phone Number, ex. 719-222-2790" id="form-input"/>
                <input type="text" placeholder="Email" id="form-input"/>
                <input type="text" placeholder="LinkedIn" id="form-input"/>
                <textarea id="form-textarea" placeholder="Type Your Messge Here"/>
            </form> 
                <button type="submit" id="form-submit">Submit</button>
        </>
    )
}

export default ContactForm
