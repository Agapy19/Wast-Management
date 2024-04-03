import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './Header.css';
import Button from './Button';

const Header = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(false);
        }
    }


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen) 
    };

    return (
        <>
            <nav>
                <Link to='/' className='logo'>Wast.</Link>
                <div className="menu" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
                </div>
                <ul className={click ? "open" : "close"}>
                    <li>
                        <NavLink to='/' onClick={closeMobileMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' onClick={closeMobileMenu}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services' onClick={closeMobileMenu}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' onClick={closeMobileMenu}>Espace Client</NavLink>
                    </li>
                    <Button />
                </ul>
            </nav>
        </>
    )
}

export default Header;
