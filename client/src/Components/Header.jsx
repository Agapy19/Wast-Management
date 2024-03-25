// Header.js
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import './Header.css';
import Button from './Button';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav>
                <Link to='/' className='logo'>Wast.</Link>
                <div className="menu"onClick={()=>{
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services'>Services</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/login'>Espace Client</NavLink>
                    </li>


                    <Button />


                </ul>
            </nav>
        
        </>
    )
}

export default Header;
