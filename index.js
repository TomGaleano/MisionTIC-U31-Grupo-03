const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
require('dotenv').config({path: './var.env'})
const conectarDB = require('./config/cxn_db');
var app = express();
app.use(router);

router.get('/mensaje', function(req, res){
    res.send('Mensaje con Método GET')
    conectarDB();
});

router.post('/mensaje', function(req, res){
    res.send('Mensaje con Método POST')
});

router.put('mensaje', function(req, res){
    res.send('Mensaje con Método PUT')
});

router.delete('/mensaje', function(req, res){
    res.send('Mensaje con Método DELETE')
})


app.listen(process.env.PORT);

console.log('Servidor Web ejecutándose desde: http://localhost:4000');
console.log('"Ctrl + c" para finalizar el Servidor Web');