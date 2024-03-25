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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="login">
                <img src="/src/Images/logo.png" alt="" />
                <h1>Déjà client Wast Management ?</h1>
                <div className="login-contain">
                    <label>Email</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                    <label>Mot de passe</label>
                    <input type="text" onChange={e => setPassword(e.target.value)} />
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
