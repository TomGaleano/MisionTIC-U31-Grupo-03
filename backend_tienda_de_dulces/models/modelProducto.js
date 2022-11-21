const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    id_producto : Number,
    nombre_producto : String,
    cantidad_inventario_producto : Number,
    categoria_producto : String,
    precio_producto : Number,
    id_proveedor : [mongoose.Types.ObjectId],
    img_producto : String
},
{
    versionKey : false
});

module.exports = mongoose.model('productos', productoSchema);