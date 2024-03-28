import React, { useState } from 'react';
import './EspaceClient.css';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import axios from 'axios';

function EspaceClient() {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleCheckBoxClick = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/login', { email, password });

            console.log(response.data);

            navigate('/contact');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="login">
                <img src="/src/Images/logo.png" alt="" />
                <h1>Déjà client Wast Management ?</h1>
                <div className="login-contain">
                    <label>Email</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                    <label>Mot de passe</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                    <span>Mot de passe oublié ?</span>
                </div>
                <div className="login-connect" onClick={handleCheckBoxClick}>
                    {isChecked ? <MdCheckBox className='icon' /> : <MdOutlineCheckBoxOutlineBlank className='icon' />}
                    <p>Rester connecté</p>
                </div>
            </div>
            <button type="submit" className='button'>Connexion</button>
            <Link to="/inscription">
                <button type="button" className='button-primary'>Inscription</button>
            </Link>
        </form>
    );
}

export default EspaceClient;
