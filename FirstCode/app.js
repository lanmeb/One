alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é MAIOR que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;

    }
}
//  usando operador ternário
//tentativas é maior que 1 ?            se sim....   : senao ....
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


// sem usar op. ternario
//if (tentativas > 1) {
//  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}

