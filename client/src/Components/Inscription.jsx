import React, { useState } from 'react';
import Button from "./Button";
import './Inscription.css';
import { LiaEyeSolid } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { PiEyeSlashLight } from "react-icons/pi";

function Inscription() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChangeEmail = (event) => {
        const { value } = event.target;
        setEmail(value);
        setIsValidEmail(validateEmail(value));
    };

    const handleChangePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
        setIsValidPassword(validatePassword(value));
    };

    const handleChangeConfirmPassword = (event) => {
        const { value } = event.target;
        setConfirmPassword(value);
        setIsValidConfirmPassword(value === password);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Vérifier si le mot de passe contient au moins une lettre et un chiffre, et a une longueur entre 8 et 15 caractères
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValidEmail) {
            alert("Veuillez saisir une adresse e-mail valide.");
        } else if (!isValidPassword) {
            alert("Le mot de passe doit contenir au moins une lettre et un chiffre, et avoir une longueur entre 8 et 15 caractères.");
        } else if (!isValidConfirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
        } else {
            console.log("Formulaire soumis avec succès !");
        }
    };

    return (
        <div className="inscription">
            <div className="inscription-left">
                <h1> BIENVENUE</h1>
                <p>Rejoins-nous dès maintenant!</p>
                <div className="inscription-left-input">
                    <label>Email</label>
                    <div className="input-with-icon">
                        <MdAlternateEmail className="input-icon" />
                        <input
                            type="text"
                            value={email}
                            onChange={handleChangeEmail}
                            className={!isValidEmail ? "input-error" : ""}
                        />
                    </div>
                    {!isValidEmail && <span className="error-message">Adresse e-mail invalide</span>}
                </div>
                <div className="inscription-left-input">
                    <label>Mot de passe</label>
                    <div className="input-with-icon">
                        {showPassword ? (
                            <LiaEyeSolid
                                className="input-icon-right"
                                onClick={handleTogglePasswordVisibility}
                                style={{ cursor: "pointer" }}
                            />
                        ) : (
                            <PiEyeSlashLight
                                className="input-icon-right"
                                onClick={handleTogglePasswordVisibility}
                                style={{ cursor: "pointer" }}
                            />
                        )}
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handleChangePassword}
                            className={!isValidPassword ? "input-error" : ""}
                        />
                        <IoKeyOutline className="input-icon" />
                        <div className="input-line"></div>
                    </div>
                    {!isValidPassword && <span className="error-message">Le mot de passe doit contenir au moins une lettre et un chiffre, et avoir une longueur entre 8 et 15 caractères.</span>}
                </div>
                <div className="inscription-left-input">
                    <label>Confirmation du mot de passe</label>
                    <div className="input-with-icon">
                        {showPassword ? (
                            <LiaEyeSolid
                                className="input-icon-right"
                                onClick={handleToggleConfirmPasswordVisibility}
                                style={{ cursor: "pointer" }}
                            />
                        ) : (
                            <PiEyeSlashLight
                                className="input-icon-right"
                                onClick={handleToggleConfirmPasswordVisibility}
                                style={{ cursor: "pointer" }}
                            />
                        )}

                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={handleChangeConfirmPassword}
                            className={!isValidConfirmPassword ? "input-error" : ""}
                        />
                        <IoKeyOutline className="input-icon" />
                        <div className="input-line"></div>
                    </div>
                    {!isValidConfirmPassword && <span className="error-message">Les mots de passe ne correspondent pas.</span>}
                </div>
                <Button color={{ border: "1px solid #008000", background: "#fff", color: "#303D4D" }} name="Inscription" onClick={handleSubmit} />
            </div>
        </div>
    );
}

export default Inscription;
