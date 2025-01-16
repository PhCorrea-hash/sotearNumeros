function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let minimo = parseInt(document.getElementById('de').value);
    let maximo = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    if(quantidade <= maximo) {

    for (let i = 0; i < quantidade; i++) {
        numero = numeroAleatorio(minimo, maximo);

        while (sorteados.includes(numero)) {
            numero = numeroAleatorio(minimo, maximo);
        }

        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    statusBotao();
} else {
    alert('Qauntidade de numeros a serem sorteados exede o numero maximo');
}
}
function numeroAleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

function statusBotao () {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    statusBotao();
}