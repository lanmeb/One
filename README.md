# One
Projeto Oracle + Alura parceria MCIO - G8

## Formação em Programação
### Curso de Lógica de programação: mergulhe em programação com JavaScript
Aprenda lógica de programação
O raciocínio lógico nos acompanha o tempo todo. Por exemplo, para fazer café, precisamos primeiro aquecer a água, depois despejarmos ela quente sobre o pó de café, assim o pó será coado e o café estará pronto para beber. Caso não siga sequência lógica, vai ser difícil saborear um bom café.

A lógica de programação nada mais é do que uma sequência de passos para resolver um problema. Quem vai resolver o problema, nesse caso, é o computador, baseado nas instruções que passamos para ele. Então, precisamos saber quais tipos de instruções o computador entende e qual a melhor forma de passarmos os comandos para nos comunicarmos com ele.

### Desafios
Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
````js
alert ("Boas vindas ao nosso site!")
````

Declare uma variável chamada nome e atribua a ela o valor "Lua".
````js
let nome = "Lua";
````
Crie uma variável chamada idade e atribua a ela o valor 25.
````js
let idade = 25;
````
Defina uma variável numeroDeVendas e atribua a ela o valor 50.
````js
let numeroDeVendas = 50;
````
Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
````js
let saldoDisponivel = 1000;
````
Exiba um alerta com o texto "Erro! Preencha todos os campos"
````js
alert ("Erro! Preencha todos os campos");
````
Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
````js
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
````
Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
````js
let nome = prompt("Digite seu nome");
````
Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
````js
let idade = prompt("Digite sua idade");
````
Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!". */
````js
let idade = prompt("Digite sua idade");
    if (idade1 >= 18 ){
        alert("Pode tirar a habilitação!")
    }
````
### Desafios 2
Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
````js
//função para ignorar acentos e maiusculas
function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

let diaDaSemana = prompt("Digite um dia da semana");
diaDaSemana = removerAcentos(diaDaSemana);

if (diaDaSemana === "sabado" || diaDaSemana ==="domingo"){
    alert ("Bom fim de semana!");
}else{
    alert ("Boa semana!");
}

````
Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
````js
let numero = prompt("Digite um numero");
if (numero < 0) {
    alert(`O número ${numero} é negativo.`);
} else if (numero == 0) {
    alert(`O número ${numero} é neutro.`);
} else {
    alert(`O número ${numero} é positivo.`);
}
````
Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
````js
let pontuacaoJogo= prompt("Digite os pontos");
if(pontuacaoJogo >= 100){
    alert("Parabéns, você venceu!")
}else{
    alert("Tente novamente para ganhar.")
}
````
Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
````js
let saldo = 100;
alert(`Seu saldo da conta é de R$${saldo} .`);
````
Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
````js
let nome = prompt("Digite seu nome.");
alert(`Bem vindo, ${nome}!`)
````
