const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
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
            to: 'recipient@example.com', // Mettez l'adresse e-mail du destinataire ici
            subject: 'Nouveau message de contact depuis votre site web',
            text: `
        Nom: ${firstName} ${lastName}
        Téléphone: ${phone}
        Adresse: ${address}
        E-mail: ${email}
        Date et heure de disponibilité: ${selectedDateTime}
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
