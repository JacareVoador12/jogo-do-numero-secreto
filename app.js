// let titulo = document.querySelector("h1");
// titulo.innerHTML = "jogo do número secreto";
// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "escolha um número entre 1 a 100";
let listaDeNumerosSorteados = [];
let qtdDeNumeros = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
    console.log(numeroSecreto)

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
};

function exibirMensagemInicial() {
    {exibirTextoNaTela("h1", "JOGO DO NÚMERO SECRETO");
    exibirTextoNaTela("p", `Escolha um número de 1 a ${qtdDeNumeros}`);
    }
    }

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;
    // let input1 = document.querySelector("#input1").value
    // let chute = document.getElementsByClassName("container__input")[0].value
    // let chute = document.getElementById("input_id").value
    console.log(chute == numeroSecreto);
    //operador ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    //HTML talvez não aceite template strings (`${}`) (nesse caso aceitou);
    if (chute == numeroSecreto) {
        exibirTextoNaTela("p", `Parabéns ! Você acertou o número secreto com ${tentativas} ${palavraTentativa} !`);
        exibirTextoNaTela("h1", "ACERTOU !");

        document.getElementById("reiniciar").removeAttribute("disabled")
    }
        else if (chute > numeroSecreto) {
            exibirTextoNaTela("p", `O número secreto é menor que ${chute} (tentativas: ${tentativas})`);
    } else {
        exibirTextoNaTela("p", `o número secreto é maior que ${chute} (tentativas: ${tentativas})`);
    }
    // se o valor for maior ou menor que qtdDeNumeros
    if (chute > qtdDeNumeros || chute < 1) {
        exibirTextoNaTela("p", `Esse não é um valor entre 1 e ${qtdDeNumeros} (tentativas: ${tentativas})`);
    }
    tentativas++
    limparInput()
 }
    
    
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * qtdDeNumeros + 1);
   let qtdDeElementosNaLista = listaDeNumerosSorteados.length;
   if (qtdDeElementosNaLista == qtdDeNumeros) {
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio()
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}


function limparInput() {
    chute = document.querySelector("input");
    chute.value = ""
}

function reiniciarJogo() {
    exibirMensagemInicial()
    numeroSecreto = gerarNumeroAleatorio();
    limparInput();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}