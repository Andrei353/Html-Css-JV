//Dom

const url = document.querySelector('#url');
const btn = document.querySelector('#botao');
const qr = document.querySelector('#qrcode');

//evento

botao.addEventListener('click',gerarQR)

//função

function gerarQR(){
    texto = url.value
    qr.innerHTML = ""

    code = new QRCode(qr, {
        text: texto,
        width: 400,
        height: 400,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
        
    });

}




