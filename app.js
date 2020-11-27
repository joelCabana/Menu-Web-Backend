const express = require('express');
const app = express();

const {mongoose} = require('./database');
const cors = require('cors');

//middlewares
app.use(express.json);
app.set('port',process.env.PORT || 3000);
app.use(cors());

module.exports = app;

