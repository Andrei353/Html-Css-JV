//Função de Calcular
function fixCalc(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var elemResult = document.getElementById("resultado");

    if (elemResult.textContent === undefined) {
        elemResult.textContent = "Resultado: " + String(num1 + num2) + "."
    } else {
        elemResult.textContent = "Resultado: " + String(num1 + num2) + "."
    }
}

//Validaçãode Fomulário
function fixFormValidation(){
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;

    if (nome === '' || telefone === '' || email === '') {
        alert('Preencha todos os campos!');
        return;
    }

}


//Gerar Relatório de Manutenção

function generateReport(){
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const responsible = document.getElementById("responsible").value;

    const report = `Relatorio de Manutenção
    Data: ${date}
    Tipo de Manutenção: Corretiva
    Descrição: ${description}
    Responsável: ${responsible}`;
    alert(report);
}

