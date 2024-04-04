const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

router.post('/send-email', [
    body('firstName').notEmpty().withMessage('Le prénom est requis'),
    body('lastName').notEmpty().withMessage('Le nom est requis'),
    body('email').isEmail().withMessage('Veuillez fournir une adresse e-mail valide'),
    body('message').notEmpty().withMessage('Le message est requis')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, phone, address, email, selectedDateTime, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        let mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: 'recipient@example.com',
            subject: 'Nouveau message de contact depuis votre site web',
            text: `
                Nom: ${firstName} ${lastName}
                Téléphone: ${phone || 'Non fourni'}
                Adresse: ${address || 'Non fournie'}
                E-mail: ${email}
                Date et heure de disponibilité: ${selectedDateTime || 'Non fournie'}
                Message: ${message}
            `
        };

        let info = await transporter.sendMail(mailOptions);
        console.log('E-mail envoyé:', info.response);
        res.status(200).send('E-mail envoyé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        res.status(500).send('Une erreur est survenue lors de l\'envoi de l\'e-mail');
    }
});

module.exports = router;
