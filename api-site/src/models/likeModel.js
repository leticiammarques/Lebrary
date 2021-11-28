var database = require("../database/config")


var curtida = 1;
function cadastrar(idUsuario, idAutor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario, idAutor);
    var instrucao = `
        INSERT INTO seguir (fkUsuario, fkAutor, curtida) VALUES ('${idUsuario}', '${idAutor}', '${1}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function likeLivro(idUsuario, idLivro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario, idLivro);
    var instrucao = `
        INSERT INTO curtida (fkUsuario, fkLivro, curtida) VALUES ('${idUsuario}', '${idLivro}', '${1}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscar():");
    var instrucao = `
    select livros.capas as capas,
        livros.nomeLivro as livros,
            count(curtida.curtida) as likes,
                autor.nomeAutor as autor
                    from curtida
                        inner join livros
                            on fkLivro = idLivro
                                inner join autor
                                    on fkAutor = idAutor
                                        group by idLivro
                                            order by likes desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = { 
    cadastrar, 
    likeLivro,
    buscar
};