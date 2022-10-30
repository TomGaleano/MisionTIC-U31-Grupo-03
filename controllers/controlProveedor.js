const modelProveedor = require('../models/modelProveedor');
exports.crear = async (req, res) => {
    try {
        let proveedor;
        proveedor = new modelProveedor({
            id_proveedor : 13,
            nombre_proveedor : "UIS",
            telefono_proveedor : 3213232032,
            direccion_proveedor : "Calle 0 #0-0",
            ciudad_proveedor : "Bucaramanga"
        });
        await proveedor.save();
        res.send(proveedor);
    } catch (error) {
        console.log("Error al guardar datos: " + error);
        res.status(500).send("Error al guardar los datos");
    }
}

exports.leer = async (req, res) =>{
    try {
        const proveedor = await modelProveedor.find();
        res.json(proveedor);
    } catch (error) {
        console.log("Error al leer datos: " + error);
        res.status(500).send("Error al leer los datos");
    }
}

exports.leer = async (req, res) =>{
    try {
        const proveedor = await modelProveedor.find();
        res.json(proveedor);
    } catch (error) {
        console.log("Error al leer datos: " + error);
        res.status(500).send("Error al leer los datos");
    }
}