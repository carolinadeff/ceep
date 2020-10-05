
function lista() {
    return fetch('https://ceep-api.herokuapp.com/categorias')
        .then(dados => dados.json())
}  

function adiciona(categoria) {
    return fetch('https://ceep-api.herokuapp.com/categorias', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({categoria})
    })
    .then(resposta => resposta.json())
    .then(resposta => {console.log(resposta.mensagem)})
}

function exclui(id){
    return fetch(`https://ceep-api.herokuapp.com/categorias/${id}`, {
        method: "DELETE"
    })
    .then(resposta => resposta.json())
    .then(resposta => {console.log(resposta.mensagem)})
}


export {
    lista,
    adiciona,
    exclui
}