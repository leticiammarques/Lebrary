
fetch(`/like`, {
    method: "GET",
}).then(function (resposta) {

    // console.log("resposta: ", resposta);
    resposta.json().then((json) => {
        var obj = (json);
        console.log(obj)
        for(var i = 0; i < obj.length; i++) {
            rank.innerHTML += `
        <div class="cards">
                <img src="${obj[i].capas}" alt="">
                <h2>${obj[i].livros}</h2>
                <h3>#${i + 1}</h3>
                </div>
            `
        }
    }).catch((erro) => {

    })

}).catch(function (resposta) {
    if (resposta.status == 406) {
        alert('Oops!! Parece que você ja curtiu esse livro... que tal procurar um outro que tenha interesse? :)')
    }
    console.log(`#ERRO:${resposta}`);

});
    
    //  var btn = document.querySelector("#coracao_like");

    //  btn.onclick   = function(){
    //   coracao_like.classList.toggle("leaves")
    //  }

    function puxar_like_livro(idLivro) {
        var btn = document.getElementById("coracao_like");
        btn.classList.add('preencher');
        console.log(btn);


    
        var idUsuario = sessionStorage.ID_USUARIO;

        
        fetch(`/like/cadastrar/likeLivro/${idUsuario}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    idLivro: idLivro,
                
                })
            }).then(function (resposta) {

                if (resposta.status == 406) {
                    alert('Oops!! Parece que você ja curtiu esse livro... que tal procurar um outro que tenha interesse? :)')
                }

                // console.log("resposta: ", resposta);
                resposta.json().then((json) => {
                    var obj = (json);
                    console.log(obj)
                }).catch((erro) => {

                })

            }).catch(function (resposta) {
                if (resposta.status == 406) {
                    alert('Oops!! Parece que você ja curtiu esse livro... que tal procurar um outro que tenha interesse? :)')
                }
                console.log(`#ERRO:${resposta}`);

            });
        


    
    // var possuiPreencher = false;
    // for (var i = 0; i < btn.classList.length; i++) {
    //   var classe = btn.classList[i];
    //   console.log(classe); 
    //   if (classe == "preencher") {
    //     possuiPreencher = true;
    //   }
    // }
    // if (possuiPreencher == true) {
    //   btn.classList.remove("preencher");
    // } else {
    //   btn.classList.add("preencher");
    // }
  }

  //  var btn = document.querySelector("#coracao_like");

//  btn.onclick   = function(){
//   coracao_like.classList.toggle("leaves")
//  }
function puxar_like(idAutor) {
    var btn = document.getElementById("coracao_like");
    btn.classList.add('preencher');
    console.log(btn);


  
    var idUsuario = sessionStorage.ID_USUARIO;

    
      fetch(`/like/cadastrar/${idUsuario}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                   idAutor: idAutor,
               
            })
        }).then(function (resposta) {

            if (resposta.status == 406) {
                alert('Oops!! Parece que você ja segue esse autor... que tal procurar um outro que tenha interesse? :)')
            }

            // console.log("resposta: ", resposta);
            resposta.json().then((json) => {
                var obj = (json);
                console.log(obj)
            }).catch((erro) => {

            })

        }).catch(function (resposta) {
            if (resposta.status == 406) {
                alert('Oops!! Parece que você ja segue esse autor... que tal procurar um outro que tenha interesse? :)')
            }
            console.log(`#ERRO:${resposta}`);

        });
    


    
    // var possuiPreencher = false;
    // for (var i = 0; i < btn.classList.length; i++) {
    //   var classe = btn.classList[i];
    //   console.log(classe); 
    //   if (classe == "preencher") {
    //     possuiPreencher = true;
    //   }
    // }
    // if (possuiPreencher == true) {
    //   btn.classList.remove("preencher");
    // } else {
    //   btn.classList.add("preencher");
    // }
  }
