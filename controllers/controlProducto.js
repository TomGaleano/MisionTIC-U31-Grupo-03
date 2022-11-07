const { model } = require('mongoose');
const modelProducto = require('../models/modelProducto');

exports.crear = async (req, res) => {
    try {
        let producto = new modelProducto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log("Error guardando datos : " + error);
        res.status(500).send("Error al guardar el producto");
    }
}

exports.leer = async(req, res) => {
    try {
        const producto = await modelProducto.find();
        res.json(producto);
    } catch (error) {
        console.log("Errorr leyendo datos : " + error);
        res.status(500).send("Error al leer datos del producto");
    }
}

exports.leerPorId = async(req, res) => {
    try {
        const producto = await modelProducto.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        console.log("Errorr leyendo datos : " + error);
        res.status(500).send("Error al leer datos del producto");
    }
}

exports.actualizar = async(req, res) => {
    try {
        const producto = await modelProducto.findById(req.params.id);
        if (!producto){
            res.status(404).json({msg: "El producto no existe"});
        } else {
            await modelProducto.findByIdAndUpdate({_id: req.params.id}, req.body);
            res.json({msg: "Producto actualizado correctamente"})
        }
    } catch (error) {
        console.log("Error actualizando datos : " + error);
        res.status(500).send("Error al actualizar datos del producto");
    }
}

exports.eliminar = async(req, res) => {
    try {
        const producto = await modelProducto.findById(req.params.id);
        if (!producto){
            res.status(404).json({msg: "El producto no existe"});
        } else {
            await modelProducto.findByIdAndRemove({_id: req.params.id}, req.body);
            res.json({msg: "Producto eliminado correctamente"})
        }
    } catch (error) {
        console.log("Error eliminando datos : " + error);
        res.status(500).send("Error al eliminar datos del producto");
    }
}