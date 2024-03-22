import React from 'react'
import './TopBar.css'
import { IoTimeOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { VscLocation } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="top-bar-content">
                    <div className="top-bar-content-icons">
                        <IoTimeOutline className='icon'/>
                        <span>09H00 - 17H30</span>
                    </div>
                    <div className="top-bar-content-icons">
                        <FiPhoneCall  className='icon'/>
                        <span>+243 994 924 437</span>
                    </div>
                    <div className="top-bar-content-icons">
                        <IoMailOutline  className='icon'/>
                        <span>mafoagapy@gmail.com</span>
                    </div>
                    <div className="top-bar-content-icons">
                        <VscLocation  className='icon'/>
                        <span>123, rue Principale</span>
                    </div>
                  
                </div>
                <div className="social-links">
                        <FaFacebookF  className='icon'/>
                        <FaTwitter  className='icon'/>
                        <FaLinkedinIn  className='icon'/>
                        <FaInstagram  className='icon'/>
                    </div>
            </div>
        </div>
    );
}

export default TopBar