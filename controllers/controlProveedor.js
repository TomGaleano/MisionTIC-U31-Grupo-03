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

exports.actualizar = async (req, res) =>{
    try {
        const proveedor = await modelProveedor.findById(req.params.id_prov);
        if (!proveedor){
            res.status(404).json({mensaje: "El proveedor no existe"});
        }
        else {
            //await modelProveedor.findByIdAndUpdate({_id: req.params.id_prov}, req.body);
            await modelProveedor.findByIdAndUpdate({_id: req.params.id_prov}, { nombre_prov:"UIS MisiónTIC 2022"});
            res.json({mensaje: 'El proveedor fue actualizado correctamente.'})
        }
    } catch (error) {
        console.log("Error al actualizar datos: " + error);
        res.status(500).send("Error al actualizar los datos");
    }
}

exports.leer = async (req, res) => {
    try {
        const proveedor = await modelProveedor.find();
        res.json(proveedor);
    } catch (error) {
        console.log("Error al leer datos: " + error);
        res.status(500).send("Error al leer los datos");
    }
}

exports.eliminar = async (req, res) => {
    try {
        const proveedor = await modelProveedor.findById(req.params.id_prov);
        if (!proveedor){
            res.status(404).json({mensaje: 'El proveedor no existe'})
        }
        else{
            await modelProveedor.findOneAndRemove({ _id: req.params._id});
            res.json({mensaje: "Proveedor eliminado correctamente."})
        }
    } catch (error) {
        console.log("Error al eliminar datos: " + error);
        res.status(500).send("Error al eliminar los datos");
    }
}