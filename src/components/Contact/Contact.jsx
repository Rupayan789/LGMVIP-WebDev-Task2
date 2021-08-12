import React from 'react'
import {FaLinkedin , FaTwitterSquare , FaInstagramSquare} from 'react-icons/fa'
import "./styles.scss"


const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-body">
                <div className="contact-heading">Contact Us By</div>
                <div className="contact-flex">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/rupayan-rout-a59b051a0/"><FaLinkedin/></a></li>
                        <li><a href=""><FaTwitterSquare/></a></li>
                        <li><a href="https://www.instagram.com/rupayan93/"><FaInstagramSquare/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Contact
