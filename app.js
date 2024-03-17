let escolherNumero;
let numerosSorteados = [];
escolherNumber();
mensagemInicial();
numeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;
let chute;

function escolherNumber(){
    escolherNumero = parseInt(prompt("Escolha o número máximo"));
}
function mensagemInicial(){
    exibirTexto("h1","Jogo do número secreto");
    exibirTexto("p",`Escolha um número de 0 a ${escolherNumero}`);
}

function numeroAleatorio(){
    numeroSecreto = parseInt(Math.random() * `${escolherNumero}` + 1);
    let quantidadeSorteada = numerosSorteados.length;
    if(quantidadeSorteada == escolherNumero){
        numerosSorteados = [];
    }
    if(numerosSorteados.includes(numeroSecreto)){
        return numeroAleatorio();
    }else{
        numerosSorteados.push(numeroSecreto);
        return numeroSecreto;
    }
}

function exibirTexto(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto
    responsiveVoice.speak(texto, "Portuguese Female", {rate:1.2});
}
function verificarChute(){
    chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
    mensagemTentativas = tentativas == 1? "tentativa" : "tentativas";
    if (chute == numeroSecreto){
            exibirTexto("h1",`Você acertou com ${tentativas} ${mensagemTentativas}`);
            exibirTexto("p", "Parabéns");
            document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
            if(chute > numeroSecreto){
                exibirTexto("h1","Você errou!");
                exibirTexto("p","Tente um número menor");
            }
            else{
                exibirTexto("h1","Você errou!");
                exibirTexto("p","Tente um número maior");
            }
        } 
        tentativas++;
        console.log(tentativas);
        limparChute();
    }
    function limparChute(){
        chute = document.querySelector("input");
        chute.value = "";
    }
function reiniciarJogo(){
    escolherNumber();
    mensagemInicial();
    numeroAleatorio();
    limparChute();
    document.getElementById("reiniciar").setAttribute("disabled",true);
    tentativas = 1;
}
