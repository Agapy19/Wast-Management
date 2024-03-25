const express = require('express');
var cors = require('cors')
const app = express();

const loginRoute=require( 'server/Routes/LoginRouter.js');

const signinRoute=require('server/Routes/SignUpRouter.js');

const port = 3001;

app.use(express.json());

app.use(cors())


app.use('/login',loginRoute);

app.use('/sign', signinRoute)

app.listen(port, () => { console.log(`Notre application tourne sur le port : http://localhost:${port}`) });