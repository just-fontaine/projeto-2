let numerosSorteados = [];

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 5');
}

function reiniciarJogo(){
    if (numerosSorteados.length >= 5){
        exibirTextoNaTela('h1', 'Você zerou o jogo!');
        exibirTextoNaTela('p', '');
        chute = document.querySelector('input').setAttribute('disabled', true);
        document.getElementById('reiniciar').setAttribute('disabled', true);
        document.getElementById('chutar').setAttribute('disabled', true);
        return
    }
    else{
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é MENOR do que ${chute}`);
        }
        else{
            exibirTextoNaTela('p', `O número secreto é MAIOR do que ${chute}`);
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 5 + 1);
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();
