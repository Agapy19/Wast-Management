const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
app.use(express.json());
app.use(cors());




const prisma = new PrismaClient();

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'L\'adresse email ou le mot de passe est incorrect' });
        }

        const token = jwt.sign(
            {
                userId: user.id,
                userEmail: user.email
            }, 'your-secret-key', { expiresIn: '1h' });

        res.status(200).json({ message: 'Connexion réussie', token: token });
    } catch (error) {
        console.error('Erreur de connexion:', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la connexion' });
    }
});


app.post('/signup', async (req, res) => {
    const { email, password, name, confirmPassword } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'L\'adresse email est déjà utilisée' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            },
        });

        res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
    } catch (error) {
        console.error('Erreur lors de la création du compte:', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la création du compte' });
    }
});

app.post('/send-email', async (req, res) => {
    const { email, firstName, lastName, phone, address, selectedDateTime, message } = req.body;

    try {
        // Récupérer l'utilisateur à partir de la base de données en utilisant son adresse email
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé.' });
        }

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mafoagapy697@gmail.com', // Votre adresse email
                pass: '1902Kyungu' // Votre mot de passe
            }
        });

        let mailOptions = {
            from: user.email, // Adresse email de l'expéditeur récupérée depuis la base de données
            to: 'mafoagapy697@gmail.com', // Votre adresse email
            subject: 'Nouveau message de contact',
            text: `Prénom: ${firstName}\nNom: ${lastName}\nTéléphone: ${phone}\nAdresse: ${address}\nEmail: ${email}\nDate et heure préférées: ${selectedDateTime}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email envoyé avec succès.' });
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'envoi du message:', error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.' });
    }
});




app.listen(3002, () => {
    console.log('Serveur à l\'écoute sur le port 3002');
});
