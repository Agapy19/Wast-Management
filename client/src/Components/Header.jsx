// Header.js
import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container-header">
                <div className="logo">Wast.</div>
                <nav>
                    <Link to="/" className="nav-link">
                        <span>Home</span>
                    </Link>
                    <Link to='/about' className="nav-link">
                        <span>About</span>
                    </Link>
                    <Link to="/services" className="nav-link">
                        <span>Services</span>
                    </Link>
                    <Link to="/testimony" className="nav-link">
                        <span>Testimony</span>
                    </Link>
                    <Link to="/login" className="nav-link">
                        <span>Espace Client</span>
                    </Link>
                    
                </nav>
                <Link to="/contact" className=" nav-contact">
                        <span>Contactez-nous</span>
                    </Link>
            </div>
        </header>
    )
}

export default Header;
