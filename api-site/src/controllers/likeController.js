var likeModel = require('../models/likeModel')
function cadastrar(req, res) {
    // var nome = req.body.nome;
    // var email = req.body.email;
    // var senha = req.body.senha;
    // var telefone = req.body.telefone;

    var idUsuario = req.params.idUsuario;
    var idAutor = req.body.idAutor;





    // console.log("telefone que chegou novo: " + telefone);


    likeModel.cadastrar(idUsuario, idAutor)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                if (erro.errno == 1062) {
                    console.log('chave duplicada');
                    res.status(406).send('duplicado');
                } else {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao registrar o seu like! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }

            }
        );

}

module.exports = {
    cadastrar
}