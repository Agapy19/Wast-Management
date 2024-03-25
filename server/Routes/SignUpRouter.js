const express = require('express');

const signup = express.Router();

const authentification = require("server/Controllers/authController.js")

signup.post('/', authentification.signUpUser);

module.exports = signup;