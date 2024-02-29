//Criei um contador que inicia com 1
let contador = 1;

// verifica o elemento id (radio1-mandato) quando  ativado "check(true)" imagem 1
document.getElementById("radio1-mandato").checked = true;

// setIntervalo ativa a cada 3 mil milissegundos = 3 seg
setInterval( function() {
    proximaImagem(); //chamo a função proximaImagem() a cada ativação do setInterval
}, 3000);

// função que vai acumulando o contador de 1 em 1 
function proximaImagem() {
    contador++;
    if (contador > 4) { // quando o contador passar de 4, entra na condicional
        contador = 1;   // dexando novamente o contador valendo 1
    };
// novamente pegamos o elemento dispondo num placeholder onde o número vai sendo alterado até atingir 4
    document.getElementById(`radio${contador}-mandato`).checked = true;
};

