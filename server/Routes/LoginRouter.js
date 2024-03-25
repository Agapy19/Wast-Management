const express = require('express');

const logInRoute = express.Router();

const authentification = require("server/Controllers/authController.js")

logInRoute.post('/', authentification.logInUser);

module.exports = logInRoute;