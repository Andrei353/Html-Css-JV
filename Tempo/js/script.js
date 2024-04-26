//Dom
const pesquisa = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temp = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = '98ea74169a52d9694f3797bb0f8bf9ec'


botao.addEventListener('click',buscarcidade)

async function buscarcidade(){
     const cidade = pesquisa.value

     const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

     console.log(dados)

     nome_cidade.textContent = `Tempo em ${dados.name}`
     temp.textContent = `${(dados.main.temp).toFixed(0)}°C`
     previsao.textContent = `${dados.weather[0].description}`
}

