import React from 'react'
import LinkButtons from './LinkButtons'
import ContactForm from './ContactForm'
import blackCloseButton from '../PhotoResources/blackCloseButton.png'
const Contact = () => {
 

    return (
        <div>
            <LinkButtons />
            <div className="contact">
                <div id="top-contact-div">
                    <h1 id="contact-header">Contact</h1>
                    <h2>Discover your next Stellar Software Engineer</h2>
                </div>
                <div id="bottom-contact-div">
                    <div id="bottom-left">
                        <div id="topic-headers">
                            <h2>Favorite Coffee Shop</h2>
                        </div>
                        <div id="coffee-map">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.8586643466488!2d-104.98133538507274!3d39.765281602924745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c79aa1492e579%3A0x1524ffbf94ce4d91!2sImproper%20City!5e0!3m2!1sen!2sus!4v1585110616016!5m2!1sen!2sus" 
                            width="100%" 
                            height="300" 
                            allowfullscreen="" 
                            tabindex="0"
                            style={{marginLeft: "-0.5%", marginTop: "2%", boxShadow: "0 0 6px 6px black"}}
                            ></iframe>
                            <div id="location-div">
                                <div id="location-left">
                                    <h2>T</h2>
                                    <h2>E</h2>
                                    <h2>L</h2>
                                    <h2>G</h2>
                                </div>
                                <div id="location-right">
                                    <h2>719-213-7688</h2>
                                    <h2>miriamgrigsby@gmail.com</h2>
                                    <a id="linkedIn" href="https://www.linkedin.com/in/miriam-grigsby/">LinkedIn</a>
                                    <a id="linkedIn" href="https://github.com/miriamgrigsby">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="bottom-middle">
                        <div id="topic-headers">
                            <h2>Get In Touch</h2>
                        </div>
                        <ContactForm />   
                    </div>
                    <div id="bottom-right">
                        <div id="topic-headers">
                            <h2>Things to Know About Me</h2>
                        </div>
                        <div id="things-to-know-div">
                            <div id="things-to-know-top">
                                <h3 id="things-to-know-headers">We Don't Have to Get Coffee</h3>
                                <p>Don't get me wrong, I love coffee and tea. Well, most drinks actually, but I think there are a lot of fun ways to network. If we share a common interest or hobby, then let's spend an hour doing that. I prefer natural and authentic connections, so if you'd feel more comfortable doing something besides getting coffee, I'd be glad to join to you!</p>
                            </div>
                            <div id="things-to-know-middle">
                                <h3 id="things-to-know-headers">Areas of Interest</h3>
                                <ul>
                                    <li>Aeronautics and Aerospace</li>
                                    <br></br>
                                    <li>Robotics</li>
                                    <br></br>
                                    <li>Science and Technology</li>
                                    <br></br>
                                    <li>Outdoor Industry</li>
                                </ul>
                            </div>
                            <div id="things-to-know-bottom">
                                <h3 id="things-to-know-headers">Ice Breakers</h3>
                                <ol>
                                    <li>Rock Climbing: Specifically bouldering</li>
                                    <br></br>
                                    <li>Snowboarding: I'm a beginner</li>
                                    <br></br>
                                    <li>Dogs: They're all wonderful</li>
                                    <br></br>
                                    <li>Construction: Small wood projects are my jam!</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
