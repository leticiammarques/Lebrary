var express = require("express");
var router = express.Router();
var likeController = require("../controllers/likeController");

// var usuarioController = require("../controllers/usuarioController");


router.post("/cadastrar/likeLivro/:idUsuario", function (req, res) {
    likeController.likeLivro(req, res);
})

router.post("/cadastrar/:idUsuario", function (req, res) {
    likeController.cadastrar(req, res);
})

router.get("/", function (req, res) {
    likeController.buscar(req, res);
})
module.exports = router;