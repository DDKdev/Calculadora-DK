let resultado = document.querySelector('#resultado');

function inserir(valor){
    resultado.innerHTML += valor;
}

function clean(){
    resultado.innerHTML = '';
}

function cleanChar(){
    let result = document.getElementById('resultado').innerHTML;
    resultado.innerHTML = result.substring(0,result.length -1);
}

function calcular(){
    if(resultado.textContent.length>1){
        document.querySelector('#resultado').innerHTML = eval(resultado.textContent);
    }
}