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






### Exercícios
1. Pedro comprou um saco de ração com peso em quilos. Ele possui dois gatos, para os quais fornece a quantidade de ração em gramas. A quantidade diária de ração fornecida para cada gato é sempre a mesma. Faça um programa que receba o peso do saco de ração e a quantidade de ração fornecida para cada gato, calcule e mostre quanto restará de ração no saco após cinco dias.
    - Entradas:
        - Peso do saco de ração em KG
        - Quantidade de ração por gato por dia (gramas)
    - Saída:
        - Quanto restará de ração após cinco dias
    - Processamentos:
        -  Quantas gramas consumem em 5 dias <= Qtde ração/gato * 2 gatos * 5 dias;
        - quanto sobra => Quantidade do saco * 1000 - Quantas gramas consumem em 5 dias



2. Elaborar um programa que apresente o valor da conversão em real (R\$) de um valor lido em dólar (US$). O programa deve solicitar o valor da cotação do dólar
3. Construir um programa que leia um valor numérico inteiro e apresente como resultado os seus valores: sucessor e antecessor.