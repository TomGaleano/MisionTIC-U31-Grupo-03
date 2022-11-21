const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
var app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
var whitelist = ['http://localhost:4000/apirest/', 'http://localhost:4200/apirest/']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = {Origin: true }
    }else{
        corsOptions = {Origin: false }
    }
    callback(null, corsOptions)
}

require('dotenv').config({path: './var.env'})
const conectarDB = require('./config/cxn_db');
app.use(router);
conectarDB();
app.use(express.static('./public'));
const controlProveedor = require('./controllers/controlProveedor');

router.post('/apirest/proveedor/', cors(corsOptionsDelegate), controlProveedor.crear);
router.get('/apirest/proveedor/', cors(corsOptionsDelegate), controlProveedor.leer);
router.put('/apirest/proveedor/:id', cors(corsOptionsDelegate), controlProveedor.actualizar);
router.delete('/apirest/proveedor/:id', cors(corsOptionsDelegate), controlProveedor.eliminar);

const controlProducto = require('./controllers/controlProducto');

router.post('/apirest/producto/', cors(corsOptionsDelegate), controlProducto.crear);
router.get('/apirest/producto/', cors(corsOptionsDelegate), controlProducto.leer);
router.get('/apirest/producto/:id', cors(corsOptionsDelegate), controlProducto.leerPorId);
router.put('/apirest/producto/:id', cors(corsOptionsDelegate), controlProducto.actualizar);
router.delete('/apirest/producto/:id', cors(corsOptionsDelegate), controlProducto.eliminar);

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