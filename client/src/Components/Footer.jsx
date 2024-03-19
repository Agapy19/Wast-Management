import React from 'react'
import './Footer.css'
import Bar from './Bar'
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contain">
        <h1>WAST.</h1>
        <p>Optez pour une gestion des déchets révolutionnaire avec notre application, qui offre des solutions pratiques pour trier, collecter et suivre vos déchets, tout en vous engageant dans un mouvement vers un avenir plus durable et respectueux de l'environnement</p>
        <div className="bar"></div>
        <div className="container-footer-nav">
          <span>Home</span>

          <span>About</span>

          <span>Services</span>

          <span>Testimony</span>

          <span>Espace Client</span>
        </div>

        <div className="bar bar-2"></div>
        <div className="container-footer-contact">
          <div className="footer-contact-icones">
            <CiMail  className='icon'/>
            <span>mafoagapy697@gmail.com</span>
          </div>
          <div className="footer-contact-icones">
          <FaLocationDot  className='icon'/>
            <span>123, rue Principale, Ville</span>
          </div>
          <div className="footer-contact-icones">
          <IoIosPhonePortrait className='icon'/>
            <span>+243994924437</span>
          </div>
        </div>
        <div className="bar"></div>

        <span >© 2024 Wast Management. Tous droits réservés.</span>
      </div>
    </div>
  )
}

export default Footer