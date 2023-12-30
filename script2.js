(() =>{
    let botaoC = document.querySelector('[data-btnLimpar]');
    botaoC.addEventListener('click', () => {
        clean();
    })

    let botaoLimparChar = document.querySelector('[data-btnLimparChar]');
    botaoLimparChar.addEventListener('click', () => {
        cleanChar();
    })
    
    let botoes = document.querySelectorAll('[data-btnCalculadora]');
    botoes.forEach(botao => botao.addEventListener('click' , () => {
        let valor = botao.textContent;
        inserir(valor);
    }))

    let botaoIgual = document.querySelector('[data-resultado]');
    botaoIgual.addEventListener('click', () => {
        calcular();
    })


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
})()