const mongoose = require('mongoose');
const proveedorSchema = mongoose.Schema({
    id_proveedor : Number,
    nombre_proveedor : String,
    telefono_proveedor : Number,
    direccion_proveedor : String,
    ciudad_proveedor : String,
},
{
    versionKey : false
});
module.exports = mongoose.model('proveedor', proveedorSchema);
