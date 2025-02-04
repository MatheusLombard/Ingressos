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
        pista <= 0 || pista < qtdIngressos ? alert('Acabou os ingressos') : pista -= qtdIngressos;
        
    } else if (tipoIngresso === 'superior') {
        cadeiraSup <= 0 || cadeiraSup < qtdIngressos ? alert('Acabou os ingressos') : cadeiraSup -= qtdIngressos;
    } else {
        cadeiraInf <= 0 || cadeiraInf < qtdIngressos ? alert('Acabou os ingressos') : cadeiraInf -= qtdIngressos;
    };

    document.getElementById('qtd-pista').innerHTML = pista;
    document.getElementById('qtd-superior').innerHTML = cadeiraSup;
    document.getElementById('qtd-inferior').innerHTML = cadeiraInf;
}