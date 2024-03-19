import React, { useState } from 'react';
import './EspaceClient.css';
import Button from './Button';
import { Link } from 'react-router-dom';
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

function EspaceClient() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <form>
            <div className="login">
                <img src="/src/Images/logo.png" alt="" />
                <h1>Déjà client Wast Management ?</h1>
                <div className="login-contain">
                    <label>Identifiant</label>
                    <input type="text" />
                    <label>Mot de passe</label>
                    <input type="text" />
                    <span>Mot de passe oublié ?</span>
                </div>
                <div className="login-connect" onClick={handleCheckBoxClick}>
                    {isChecked ? <MdCheckBox className='icon' /> : <MdOutlineCheckBoxOutlineBlank className='icon' />}
                    <p>Rester connecté</p>
                </div>
            </div>
            <a href="/services" className='button'>Connexion</a>
            <Link to="/inscription">
            <a href="/about" className=' button-primary'>Inscription</a>
            </Link>
        </form>
    );
}

export default EspaceClient;
