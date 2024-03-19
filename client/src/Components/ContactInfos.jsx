import React from 'react'
import './ContactInfos.css'
const ContactInfos = () => {
    return (
        <div className="contact-info">
            <div className="contac-info__img">
                <img src="/src/Images/mobile.png" alt="mobile" />
                <p>+2439949437</p>
            </div>
            <div className="contac-info__img">
                <img src="/src/Images/message.png" alt="message" />
                <p>mafoagapy697@gmail.com</p>
            </div>
            <div className="contac-info__img">
                <img src="/src/Images/location.png" alt="localisation" />
                <p>13eme rue</p>
            </div>

        </div>
    )
}

export default ContactInfos