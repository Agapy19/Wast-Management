import React, { useState } from 'react';
import './Contact.css';
import Input from './Input';
import Servir from './Servir';
import Button from './Button';
import ContactInfos from './ContactInfos';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import Header from './Header';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [selectedDateIndex, setSelectedDateIndex] = useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState('');

    // VALIDATION DU PRENOM
    const validateFirstName = (value) => {
        if (value.trim().length < 3 || value.trim().length > 20) {
            setFirstNameError("Le prénom doit contenir entre 3 et 20 caractères");
        } else {
            setFirstNameError("");
        }
    };

    // VALIDATION DU NOM
    const validateLastName = (value) => {
        if (value.trim().length < 3 || value.trim().length > 20) {
            setLastNameError("Le nom doit contenir entre 3 et 20 caractères");
        } else {
            setLastNameError("");
        }
    };

    // VALIDATION DE L'ADRESSE EMAIL
    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            setEmailError("Entrez un email valide");
        } else {
            setEmailError("");
        }
    };

    // VALIDATION DU NUMÉRO DE TÉLÉPHONE POUR LA RDC
    const validatePhone = (value) => {
        const airtelNumber = /^(\+243)?(\s|-)?(99|97|98)\d{7}$/;
        const vodacomNumber = /^(\+243)?(\s|-)?(82|81|80)\d{7}$/;
        const orangeNumber = /^(\+243)?(\s|-)?(83|84|85|89)\d{7}$/;
        const africellNumber = /^(\+243)?(\s|-)?(90|91)\d{7}$/;
    
        if (!airtelNumber.test(value) && !vodacomNumber.test(value) && !orangeNumber.test(value) && !africellNumber.test(value)) {
            setPhoneError("Entrez un numéro de téléphone valide pour la RDC (Airtel, Vodacom, Orange ou Africell)");
        } else {
            setPhoneError("");
        }
    };
    

    // VALIDATION DE L'ADRESSE DU DOMICILE
    const validateAddress = (value) => {
        const regex = /^[a-zA-Z0-9\s]*$/;
        if (!regex.test(value)) {
            setAddressError("L'adresse doit contenir uniquement des lettres et des chiffres");
        } else if (value.trim().length < 10 || value.trim().length > 50) {
            setAddressError("L'adresse doit contenir entre 10 et 50 caractères");
        } else {
            setAddressError("");
        }
    };

    // FONCTION POUR L'HEURE ET LA DATE
    const handleDateTimeChange = (e) => {
        setSelectedDateTime(e.target.value);
    };

    const handleDateSelect = (index) => {
        setSelectedDateIndex(index);
    };

    return (
        <div className="contact">
            <div className="contact-left">
                <h1>Contact information</h1>
                <ContactInfos />
            </div>
            <div className="contact-right ">
                <div className='contact-right-input'>
                    <Input mylabel="Prénom" error={firstNameError} placeholder={"Votre prénom..."} value={firstName} onChange={(e) => {
                        setFirstName(e.target.value);
                        validateFirstName(e.target.value);
                    }} />
                    <Input mylabel="Nom" error={lastNameError} placeholder={"Votre nom..."} value={lastName} onChange={(e) => {
                        setLastName(e.target.value);
                        validateLastName(e.target.value);
                    }} />
                    <Input mylabel="Téléphone" error={phoneError} placeholder={"Votre téléphone..."} value={phone} onChange={(e) => {
                        setPhone(e.target.value);
                        validatePhone(e.target.value);
                    }} />
                    <Input mylabel="Adresse" error={addressError} placeholder={"Votre adresse..."} value={address} onChange={(e) => {
                        setAddress(e.target.value);
                        validateAddress(e.target.value);
                    }} />
                    <Input mylabel="Email" error={emailError} placeholder={"Votre adresse email..."} value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                    }} />
                    <div className='contact-right-reserve'>
                        <h2>Je serais disponible</h2>
                        <div className='contact-right-reserve__icon'>
                            <div className='contact-right-reserve__icon-text' onClick={() => handleDateSelect(0)}>
                                {selectedDateIndex === 0 ? <MdRadioButtonChecked className='icon' /> : <MdRadioButtonUnchecked className='icon' />}
                                <input type="datetime-local" value={selectedDateTime} onChange={handleDateTimeChange} className='input'/>
                            </div>
                            <div className='contact-right-reserve__icon-text' onClick={() => handleDateSelect(1)}>
                                {selectedDateIndex === 1 ? <MdRadioButtonChecked className='icon' /> : <MdRadioButtonUnchecked className='icon' />}
                                <p>Je n'ai pas de créneau de préférence</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right-service ">
                    <h2>Quels services voulez-vous</h2>
                    <Servir />
                </div>
                <div className="contact-right-message">
                    <label htmlFor="text">Entrez votre message</label>
                    <input type="text" />
                    <Button color={{ background: "#D19C13", border: "none" }} name="Envoyer" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
