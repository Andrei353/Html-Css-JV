// Const -> Constante, imutável
// LET -> Variável mutável

// Parte 1: DOM -> Determina quais objetos do HTML vão participar do JS
const anime = document.querySelector('#silhueta') // # é para ID e . é para DIV| Document faz procura no HTML
const bt01 = document.querySelector('#maou')
const bt02 = document.querySelector('#mh')
const bt03 = document.querySelector('#bl')
const bt04 = document.querySelector('#dbz')
const bt05 = document.querySelector('#kns')

// Parte 2: Eventos -> É o passo a passo do que deve acontecer para ter uma ação

bt01.addEventListener('click', AnosVodigoad) // Define que ao clicar o bt01, vai executar a função ligar
bt02.addEventListener('click', Bakugou)
bt03.addEventListener('click', Barou)
bt04.addEventListener('click', Goku)
bt05.addEventListener('click', Kazuma)

// Parte 3: Funções

function AnosVodigoad() {
    anime.src = 'image/anos.vodigoad.webp'
}
function Bakugou() {
    anime.src = 'image/bakugou.jpg'
}

function Barou() {
    anime.src = 'image/barou.jpg'
}

function Goku() {
    anime.src = 'image/goku.jpg'
}

function Kazuma() {
    anime.src = 'image/kazuma.webp'
}