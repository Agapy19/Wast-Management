import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import Button from './Button';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen) 
    };

    return (
        <>
            <nav>
                <Link to='/' className='logo'>Wast.</Link>
                <div className="menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' onClick={toggleMenu}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services' onClick={toggleMenu}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' onClick={toggleMenu}>Espace Client</NavLink>
                    </li>
                    <Button />
                </ul>
            </nav>
        </>
    )
}

export default Header;
