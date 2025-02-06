let pista = 100;
let cadeiraSup = 200;
let cadeiraInf = 400;

document.getElementById('qtd-pista').innerHTML = pista;
document.getElementById('qtd-superior').innerHTML = cadeiraSup;
document.getElementById('qtd-inferior').innerHTML = cadeiraInf;


function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdIngressos = document.getElementById('qtd').value;

    if (tipoIngresso === 'pista') {
        pista < qtdIngressos ? alert('Sem ingressos suficientes') : pista -= qtdIngressos;
        
    } else if (tipoIngresso === 'superior') {
        cadeiraSup < qtdIngressos ? alert('Sem ingressos suficientes') : cadeiraSup -= qtdIngressos;
    } else {
        cadeiraInf < qtdIngressos ? alert('Sem ingressos suficientes') : cadeiraInf -= qtdIngressos;
    };

    document.getElementById('qtd-pista').innerHTML = pista;
    document.getElementById('qtd-superior').innerHTML = cadeiraSup;
    document.getElementById('qtd-inferior').innerHTML = cadeiraInf;
}