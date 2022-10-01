

const executar = (resposta) => {
    
    return resposta.json();
}
const atualizar = () => {
    lista.innerHTML='Carregando...'
    let promessa = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa");
    let promessa2 = promessa.then(executar);
    promessa2.then(objetoRetornadoJson => {
        lista.innerHTML='';
        objetoRetornadoJson.forEach((pessoa) => {
            lista.innerHTML += "<li>Nome: " + pessoa.nome + " - Idade:" + pessoa.idade + "</li>"
        })
    
    })
}
const adicionar =()=>{
    let nomeUsuario=usuario.value;
    let requestPost={
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            nome:nomeUsuario,
            idade:20
        })
    } 
    promessaPost= fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa",requestPost).then(atualizar())
    console.log(promessaPost)
    
}



