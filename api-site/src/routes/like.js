var express = require("express");
var router = express.Router();
var likeController = require("../controllers/likeController");

// var usuarioController = require("../controllers/usuarioController");


router.post("/cadastrar/:idUsuario", function (req, res) {
    likeController.cadastrar(req, res);
})

module.exports = router;