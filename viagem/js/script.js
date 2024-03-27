//dom

const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')


//eventos / funções

botao.addEventListener('click',()=>{
    d= Number(distancia.value)
    c= Number(consumo.value)
    p= Number(preco.value)

    calculo = (d/c)*p

    resultado.textContent = `O gasto  Total para a Viagem será de R$ ${calculo.toFixed(2)}`
})