const express = require('express');
const bodyParser = require('body-parser');
const corser = require('corser');


const { mongoose } = require('./database.js');
var employeeController = require('./controller/Controller.js/index.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:27017' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/employee', employeeController);