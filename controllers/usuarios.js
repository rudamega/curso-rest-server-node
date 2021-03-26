const { response } = require('express');

const usuariosGet = (req, res) => {


    const params = req.query;

    res.json({
        msg: "get API - controlador",
        params
    });
}

const usuariosPost = (req, res) => {

    const body = req.body;

    res.json({
        msg: "POST API - controlador",
        body
    });
}
const usuariosPut = (req, res) => {


    const id = req.params.id;

    res.json({
        msg: "PUT  API - controlador",
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: "get API - controlador"
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: "get API - controlador"
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
};