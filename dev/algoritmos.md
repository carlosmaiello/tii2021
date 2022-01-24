# Algorítmos em Javascript

## Executando o programa no Node

1. Inicializar o diretório
    npm init -y
2. Instalar o plugin do Prompt
    npm i prompt-sync (ou npm install prompt-sync)
3. node <nome_do_programa>.js


## Definindo variáveis

Variável: Espaço na memória do computador reservado para armazer uma informação.

Variável possui um tipo! 

- Number: Númericos (Inteiros, Reais)
- String: Caracteres
- Boolean: Booleano ou Lógico

var num = 10;
var nome = 'Carlos Maiello';
var professor = true; //true ou false (verdadeiro ou falso)


Para declarar uma variável uso a palavra reservada ***var***.

var var = 1; (errado)

Os nomes das variáveis:
- Não podem iniciar com números;
- Não podem conter espaços nem caracteres especiais ([]{}/*.+);
- Podem conter maiúsculas e minúsculas;

#### Trabalhando com variáveis
1. Declarar a variável

var curso;
var escola;
var aluno;

2. Atribuir um valor para a variável

curso = 'Técnico em Informática para Internet';
escola = 'SENAC';

3. Manipulo ou utilizar o valor

var peso;
var altura;
var imc;

peso = 80;
altura = 1.75;

imc = peso / (altura * altura);

console.log(imc);


#### Exercícios
1. Pedro comprou um saco de ração com peso em quilos. Ele possui dois gatos, para os quais fornece a quantidade de ração em gramas. A quantidade diária de ração fornecida para cada gato é sempre a mesma. Faça um programa que receba o peso do saco de ração e a quantidade de ração fornecida para cada gato, calcule e mostre quanto restará de ração no saco após cinco dias.
2. Elaborar um programa que apresente o valor da conversão em real (R\$) de um valor lido em dólar (US$). O programa deve solicitar o valor da cotação do dólar
3. Construir um programa que leia um valor numérico inteiro e apresente como resultado os seus valores: sucessor e antecessor.
4. Crie um programa que lê o ano de nascimento de uma pessoa e o ano atual. Calcule e mostre qual é: a idade da pessoa em anos, a idade da pessoa em meses, a idade da pessoa em dias e a idade da pessoa em semanas.
5. Ler dois valores para as variáveis A e B e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores após a efetivação do processamento da troca.
6. Elaborar um programa de computador que calcule e apresente o valor do volume de uma esfera. Utilize a fórmula VOLUME <- (4 / 3) * 3.14159 * (RAIO3).


### Trabalhando com comandos condicionais

#### Comando IF (SE)

if (<teste lógico>) {
    \<comandos\>
}

ou

if (<teste lógico>)
    \<comando\>


onde:

- O ***teste lógico*** é uma expressão que retorna true ou false (verdadeiro ou falso)
- Os ***comandos*** é a lista de instruções que será executada quando o teste lógico retornar verdadeiro

#### Comando ELSE (SENÃO)

if (<teste lógico>) {
    \<comandos\>
}
else {
    \<comandos senão\>
}

ou

if (<teste lógico>)
    \<comando\>
else
    \<comando senão\>

onde:

- Os ***comandos*** senão serão obrigatóriamente executados quando o teste lógico retornar falso

#### Operadores de comparação 

No teste lógico podemos colocar operadores de comparaçãoa como:

- == - Igual
- != - Diferente
- \> - Maior
- \>= - Maior ou igual
- < - Menor
- <= - Menor ou igual

#### Operadores lógicos

- && - Operador E - as duas expressões devem ser verdadeiras
- || - Operador OU - uma das duas expressões devem ser verdadeiras
- ! - Operador Não - Inverte o valor da expressão

##### Tabela Verdade E

A  B  R
F  F  F
F  V  F
V  F  F
V  V  V

##### Tabela Verdade OU

A  B  R
F  F  F
F  V  V
V  F  V
V  V  V



#### Exercícios
1. Escreva um programa que pergunte dois números e indique se são iguais ou diferentes. Caso sejam diferentes, mostre o maior e o menor, nesta ordem.
2. Escreva um programa que pergunte quatro números inteiros, referentes a: Opção, Num1, Num2 e Num3 respectivamente; e mostre:
    1. valor de Num1 se a Opção for igual a 1;
    2. valor de Num2 se a Opção for igual a 2;
    3. valor de Num3 se a Opção for igual a 3.

    Os únicos valores aceitos para Opção são 1, 2 ou 3

3. Escreva um programa que leia três valores inteiros diferentes e:
    a) determine e imprima o menor entre eles;
    b) determine e imprima o maior número entre eles.
4. Escreva um programa que pergunte três valores distintos e os imprima em ordem crescente
5. Escreva um programa que solicite duas datas pelo teclado e imprima primeiro a menor data seguida da maior data
6. Escreva um programa para verificar a validade de uma data. O programa pergunta o dia, mês e ano de uma data (separadamente em três variáveis inteiras) e imprime uma mensagem indicando se a data é válida ou não (devem ser considerados os anos bissextos).

## While

### Exercícios
1) Mostre os número de 1 à 10
2) Mostre os números de 1 à 10 marcando os pares
3) Mostre os números pares entre 1 e 10
4) Mostre os números de 1 à 10 de forma decrescente
5) Calcule o fatorial de um número

## Array

var frutas = ["Maça", "Banana", "Melão"];
var numerosPares = [2, 4, 5, 6, 8, 10];

console.log(frutas[0]); // Maça

numerosPares[3];

### Links
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://www.devmedia.com.br/javascript-arrays/4079

### Exercícios 
1. Crie um array com uma lista de fruntas e mostre na tela
2. Solicite ao usuário que digite uma lista de números, ao concluir faça a soma dos números digitados.
3. Solicite ao usuário que digite uma lista de números, ao concluir mostre o maior número da lista.
4. Faça uma lista de tarefas onde o usuário poderá adicionar ou remover ítens da lista.