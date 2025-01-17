# Functions
### Sem retorno e sem parâmetro:

````js
function saudacao() {
    console.log("Olá!");
}
saudacao(); // Chamada da função
````
### Sem retorno e com parâmetro:

````js
function cumprimentar(nome) {
    console.log("Olá, " + nome + "!");
}
cumprimentar("Maria"); // Chamada da função com argumento
````

### Com retorno e sem parâmetro:

````js
function gerarNumeroAleatorio() {
    return Math.random();
}
console.log(gerarNumeroAleatorio()); // Chamada da função e exibição do retorno
````

### Com retorno e com parâmetro:

````js
function somar(a, b) {
    return a + b;
}
console.log(somar(5, 3)); // Chamada da função com argumentos e exibição do retorno
````

### Função anônima:

````js
let saudacao = function() {
    console.log("Olá!");
};
saudacao(); // Chamada da função
````

### **Arrow function:**
A função arrow, ou "arrow function", é uma forma mais concisa de escrever funções em JavaScript. 
Ela foi introduzida no ECMAScript 6 (ES6) e tem algumas características distintas. Vamos ver os principais pontos sobre as funções arrow:
````js
let quadrado = x => x * x;
console.log(quadrado(4)); // Chamada da função e exibição do retorno
````
#### Sintaxe Concisa:
A sintaxe é mais curta, especialmente para funções que têm apenas uma linha de código. Por exemplo:

````js
const somar = (a, b) => a + b;
````
#### Sem o this próprio:
As funções arrow não têm seu próprio contexto de this. Isso significa que o valor de this dentro de uma função arrow é o mesmo que o 
valor de this no contexto em que a função foi definida. 
Isso é útil em situações como callbacks, onde você quer manter o contexto do objeto.
````js
function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++; // 'this' refere-se ao objeto Pessoa
        console.log(this.idade);
    }, 1000);
}
const p = new Pessoa(); // A idade será incrementada a cada segundo
````
#### Sem o uso de arguments:

As funções arrow não têm o objeto arguments, que é uma lista de todos os argumentos passados para a função. 
Se você precisar acessar os argumentos, pode usar o operador rest (...).

````js
const mostrarArgumentos = (...args) => {
    console.log(args);
};
mostrarArgumentos(1, 2, 3); // Saída: [1, 2, 3]
````
#### Não podem ser usadas como construtores:

Funções arrow não podem ser usadas com a palavra-chave new, pois não têm um this próprio e não podem ser instanciadas.

#### Sem prototype:

Como não podem ser usadas como construtores, funções arrow não têm a propriedade prototype.
Essas características tornam as funções arrow muito úteis em várias situações, especialmente quando você precisa de uma sintaxe mais
limpa e deseja manter o contexto do this. 

### **Funções recursivas:**

Funções que se chamam a si mesmas para resolver um problema. Um exemplo clássico é a função que calcula o fatorial de um número.

````js
function fatorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // Saída: 120
````

### Funções de ordem superior:

Funções que podem receber outras funções como argumentos ou retornar funções. Um exemplo é a função map, que aplica uma função a cada elemento de um array.

````js
function dobrar(numero) {
    return numero * 2;
}
let numeros = [1, 2, 3];
let numerosDobrados = numeros.map(dobrar);
console.log(numerosDobrados); // Saída: [2, 4, 6]
````

### Funções imediatamente invocadas (IIFE):

Funções que são definidas e imediatamente chamadas. Elas são frequentemente usadas para criar um escopo isolado.

````js
(function() {
    console.log("Esta função é chamada imediatamente!");
})();
````
