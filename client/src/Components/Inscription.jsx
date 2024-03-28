import React, { useState } from 'react';
import Button from "./Button";
import './Inscription.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import axios from 'axios';

function Inscription() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState("");

    const handleChangeName = (event) => {
        const { value } = event.target;
        setName(value);
    };

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
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
        return passwordRegex.test(password);
    };

    const addUser = async () => {
        try {
            const values = {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            };
            const response = await axios.post('http://localhost:3002/signUp', values);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser();
    };

    return (
        <section className='sign-in' style={{ backgroundColor: "#303D4D", height: "100vh" }}>
            <div className="inscription">
                <div className="inscription-left">
                    <h1> BIENVENUE</h1>
                    <p>Rejoins-nous dès maintenant!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="inscription-left-input">
                            <label>Nom complet</label>
                            <div className="input-with-icon">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={handleChangeName}
                                />
                            </div>
                        </div>
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
                                    <AiOutlineEyeInvisible
                                        className="input-icon-right"
                                        onClick={handleTogglePasswordVisibility}
                                        style={{ cursor: "pointer" }}
                                    />
                                ) : (
                                    <AiOutlineEye
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
                            </div>
                            {!isValidPassword && <span className="error-message">Le mot de passe doit contenir au moins une lettre et un chiffre, et avoir une longueur entre 8 et 15 caractères.</span>}
                        </div>
                        <div className="inscription-left-input">
                            <label>Confirme le mot de passe</label>
                            <div className="input-with-icon">
                                {showConfirmPassword ? (
                                    <AiOutlineEyeInvisible
                                        className="input-icon-right"
                                        onClick={handleToggleConfirmPasswordVisibility}
                                        style={{ cursor: "pointer" }}
                                    />
                                ) : (
                                    <AiOutlineEye
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
                            </div>
                            {!isValidConfirmPassword && <span className="error-message">Les mots de passe ne correspondent pas.</span>}
                        </div>
                        <button type="submit" className='button'>Inscription</button>
                    </form>
                </div>
            </div >
        </section >
    );
}

export default Inscription;
