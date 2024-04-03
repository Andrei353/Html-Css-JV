//dom
const nome = document.querySelector('#nome')
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//evento e funções

botao.addEventListener('click',()=>{
   n1 = Number(nota1.value) 
   n2 = Number(nota2.value) 
   n3 = Number(nota3.value) 
   
   calculo = (n1+n2+n3)/3; 

   situacao = calculo >= 5 ? "Aprovado" : "Reprovado"
   
   resultado.textContent = `Óla ${nome.value} sua Média foi ${calculo.toFixed(1)}, Você está ${situacao}`
})