const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
require('dotenv').config({path: './var.env'})
const conectarDB = require('./config/cxn_db');
const cors = require('cors');
var app = express();
app.use(router);
conectarDB();
const controlProveedor = require('./controllers/controlProveedor');

router.post('/apirest/proveedor/', controlProveedor.crear);
router.get('/apirest/proveedor/', controlProveedor.leer);
router.put('/apirest/proveedor/:id', controlProveedor.actualizar);
router.delete('/apirest/proveedor/:id', controlProveedor.eliminar);

const controlProducto = require('./controllers/controlProducto');

router.post('/apirest/producto/', controlProducto.crear);
router.get('/apirest/producto/', controlProducto.leer);
router.put('/apirest/producto/:id', controlProducto.actualizar);
router.delete('/apirest/producto/:id', controlProducto.eliminar);

router.get('/mensaje', function(req, res){
    res.send('Mensaje con Método GET');
});

router.post('/mensaje', function(req, res){
    res.send('Mensaje con Método POST');
});

router.put('/mensaje', function(req, res){
    res.send('Mensaje con Método PUT');
});

router.delete('/mensaje', function(req, res){
    res.send('Mensaje con Método DELETE');
})


app.listen(process.env.PORT);

console.log('Servidor Web ejecutándose desde: http://localhost:4000');
console.log('"Ctrl + c" para finalizar el Servidor Web');