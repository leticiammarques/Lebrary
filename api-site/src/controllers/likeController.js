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

function likeLivro(req, res) {
    // var nome = req.body.nome;
    // var email = req.body.email;
    // var senha = req.body.senha;
    // var telefone = req.body.telefone;

    var idUsuario = req.params.idUsuario;
    var idLivro = req.body.idLivro;





    // console.log("telefone que chegou novo: " + telefone);


    likeModel.likeLivro(idUsuario, idLivro)
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

function buscar(req, res) {
    likeModel.buscar().then((resposta)=>{
        if (resposta.length > 0) {
            res.status(200).json(resposta);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch((erro)=>{
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar,
    likeLivro,
    buscar
}