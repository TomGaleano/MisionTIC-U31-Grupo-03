const mongoose = require('mongoose');
require('dotenv').config({path:'../var.env'});
const conexionDB = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGODB);
        console.log("Conectado a la Base de Datos");
    } catch (error) {
        console.log("Error: "+ error);
        process.exit(1);
    }
}
module.exports = conexionDB;
