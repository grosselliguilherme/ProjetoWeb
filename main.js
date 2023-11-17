mudaServico();
function mudaServico() {
    let servico = document.getElementById('selectServico').value;
    if (servico == 1) {
        document.getElementById("divIMC").style.display = 'block';
        document.getElementById("divPorcento").style.display = 'none';
        document.getElementById("divOrdenacao").style.display = 'none';
    } else if (servico == 2) {
        document.getElementById("divIMC").style.display = 'none';
        document.getElementById("divPorcento").style.display = 'block';
        document.getElementById("divOrdenacao").style.display = 'none';
    } else if (servico == 3) {
        document.getElementById("divIMC").style.display = 'none';
        document.getElementById("divPorcento").style.display = 'none';
        document.getElementById("divOrdenacao").style.display = 'block';
    };
};

//peso / (altura * altura)
function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura)
    imc = parseFloat(imc).toFixed(2);
    document.getElementById("resultadoIMC").innerHTML = "O IMC é: " + imc + "%";
};

function calcularPorcento() {
    let porcento = document.getElementById("porcento").value;
    let valor = document.getElementById("valorTotal").value;
    let total = (porcento * 100) / valor
    total = parseFloat(total).toFixed(1);
    document.getElementById("resultadoPorcento").innerHTML = "O Percentual é: " + total +"%";
};

function calcularOrdenacao(){
    const ordenar = document.getElementById("ordem").value;
    ordenar.sort(a, b){
        return a- b
    };
    document.getElementById("resultadoOrdenacao").innerHTML = "A ordem da sequência é: ";
}