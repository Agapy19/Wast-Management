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
            <Button color={{ background: "#7ED957", border: "none" }} name="Connexion" to="/services" />
            <Link to="/inscription">
                <Button color={{ border: "1px solid #7ED957", background: "#fff", color: "#303D4D" }} name="Inscription" to="/inscription" />
            </Link>
        </form>
    );
}

export default EspaceClient;
