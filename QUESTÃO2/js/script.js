//dom
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//eventos & funções

botao.addEventListener ('click', () =>{
    p = Number (peso.value)
    a = Number (altura.value)
    
    calculo = p/(a**2)
      
     if (calculo < 18.5) {
        situacao = "Magreza"
     } else if (calculo >= 18.5 && calculo < 25){
        situacao = "Peso Normal"
     } else if(calculo >= 25 && calculo < 30){
        situacao = "Acima do Peso"
     } else{
        situacao = "Obesidade"
     }


    resultado.textContent = `Seu IMC ${calculo.toFixed(2)} Você está com ${situacao}`


})