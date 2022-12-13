//INSERÇÃO DE NÚMEROS
let botao9 = document.querySelector('.botaoNumero9');
botao9.addEventListener('click', () => {
    InserirNumero('9');
})

let botao8 = document.querySelector('.botaoNumero8');
botao8.addEventListener('click', () => {
    InserirNumero('8');
})

let botao7 = document.querySelector('.botaoNumero7');
botao7.addEventListener('click', () => {
    InserirNumero('7');
})

let botao6 = document.querySelector('.botaoNumero6');
botao6.addEventListener('click', () => {
    InserirNumero('6');
})

let botao5 = document.querySelector('.botaoNumero5');
botao5.addEventListener('click', () => {
    InserirNumero('5');
})

let botao4 = document.querySelector('.botaoNumero4');
botao4.addEventListener('click', () => {
    InserirNumero('4');
})

let botao3 = document.querySelector('.botaoNumero3');
botao3.addEventListener('click', () => {
    InserirNumero('3');
})

let botao2 = document.querySelector('.botaoNumero2');
botao2.addEventListener('click', () => {
    InserirNumero('2');
})

let botao1 = document.querySelector('.botaoNumero1');
botao1.addEventListener('click', () => {
    InserirNumero('1');
})

let botao0 = document.querySelector('.botaoNumero0');
botao0.addEventListener('click', () => {
    InserirNumero('0');
})

//INSERÇÃO DE OPERAÇÕES

let botaoDivisao = document.querySelector('.botaoOperadorDivisao');
botaoDivisao.addEventListener('click', () => {
    InserirNumero('/');
})

let botaoMultiplicacao = document.querySelector('.botaoOperadorMultiplicacao');
botaoMultiplicacao.addEventListener('click', () => {
    InserirNumero('*');
})

let botaoAdicao = document.querySelector('.botaoOperadorAdicao');
botaoAdicao.addEventListener('click', () => {
    InserirNumero('+');
})

let botaoSubtracao = document.querySelector('.botaoOperadorSubtracao');
botaoSubtracao.addEventListener('click', () => {
    InserirNumero('-');
})

let botaoPonto = document.querySelector('.botaoPonto');
botaoPonto.addEventListener('click', () => {
    InserirNumero('.');
})

let botaoC = document.querySelector('.botaoC');
botaoC.addEventListener('click', () => {
    limparVisor();
})

let botaoCE = document.querySelector('.botaoCE');
botaoCE.addEventListener('click', () => {
    limparChar();
})

let botaoIgual = document.querySelector('.botao-igual');
botaoIgual.addEventListener('click', () => {
    calcular();
})

// função de inserção
function InserirNumero (num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero +num;
}

// APAGAR VISOR E APAGAR CHAR
function limparVisor(){
    document.getElementById('resultado').innerHTML = "";
}

function limparChar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

// Função para CALCULAR

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}