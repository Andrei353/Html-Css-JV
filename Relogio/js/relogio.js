//dom

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const data = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const frase = document.querySelector('#frase')
const alvo = document.querySelector('img')

//eventos

setInterval(relogio,1000)


//funções

function relogio(){
    let dia = new Date()
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()
    let dt = dia.getDate()
    let mm = dia.getMonth()+1
    let aa = dia.getFullYear()


    if(hr<10){
        hr="0"+hr
    }

    if(min<10){
        min="0"+min
    }

    if(seg<10){
        seg="0"+seg
    }

    if(dt<10){
       dt="0"+dt
    }

    if(mm<10){
        mm="0"+mm
    }

//---------------------------------

     if(hr>=5 && hr<12){
       frase.textContent = 'Bom dia'
       alvo.src = 'image/sun_3073665.png'
     }else if(hr>=12 && hr<18){
        frase.textContent = 'Boa tarde'
        alvo.src = 'image/sun_3073665.png'
     }else{
        frase.textContent = 'Boa noite'
        alvo.src = 'image/lua.png'
     }    

//---------------------------------
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    data.textContent = dt
    mes.textContent = mm
    ano.textContent = aa

}
