const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const service = require('/home/user-15-c1/Documents/PROJET/Wast management/server/Routes/ServiceRoute.js')
require('dotenv').config();



const app = express();
app.use(express.json());
app.use(cors());
app.use(service);


const prisma = new PrismaClient();


// Route pour la connexion
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

// Route pour l'inscription
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

app.listen(3002, () => {
    console.log('Serveur à l\'écoute sur le port 3002');
});
