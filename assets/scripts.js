//Variavel:
//let variavel= "criei uma variavel em java"
//console.log(variavel)

//Função:
//function funcao(){
//console.log("criei uma função em java")}

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function tela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML= "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp) + "°C"
    document.querySelector(".Umidade").innerHTML= "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarcidade(cidade) {
    console.log(cidade)
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())
    tela(dados)
    
}

function botao() {
    let cidade =  document.querySelector(".input-cidade").value
    buscarcidade(cidade)
}