const express = require('express');
const router = express.Router()
const controller = require ('/home/user-15-c1/Documents/PROJET/Wast management/server/Controllers/Controller.js');


router.post('/login', controller.login);
router.post('/signUp', controller.signUp);


module.exports = router;