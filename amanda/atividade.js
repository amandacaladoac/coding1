/* 1) Crie um programa que:
    ● Declare uma variável chamada nome e atribua o seu nome a ela.
    ● Declare uma variável chamada idade e atribua a sua idade a ela.
    ● Imprima na tela uma mensagem como: "Olá, meu nome é [nome] e tenho [idade] anos." */

var nome = 'Amanda'
var idade = 26
console.log('Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos.' );

/* 2) Crie um programa que:
        ● Declare uma variável para nome e para cidade
        ● Armazene as informações do tipo String em variáveis e imprima uma mensagem
        personalizada, como: "[Nome] é de [cidade]." */

var nome = 'Amanda'
var cidade = 'Recife'
console.log( nome + ' é de ' + cidade + '.' );

/* 3) Crie um programa que:
        ● Declare duas variáveis numéricas: num1 e num2.
        ● Realize as quatro operações básicas(+, -, *, /), e imprima os resultados. */

let num1 = 26
let num2 = 10
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

/* 4) Cálculo de Área:
        ● Declare duas variáveis numéricas: base e altura.
        ● Armazene nas variáveis a base e a altura de um triângulo.
        ● Calcule a área e exiba o resultado.
        ● Exemplo: “A área do triângulo é _______”. */

let base = 3
let altura = 4
console.log('A área do triângulo é ' + base * altura / 2 + '.');


/* 5) Cálculo de Média:
        ● Declare variáveis para inserir 3 notas de um aluno.
        ● Crie uma nova variável chamada media, nela deve conter o cálculo da média das 3
        notas.
        ● Exiba o resultado da média, informado a nota final.
        ● Exemplo: “O resultado da média é __________’” */

let nota1 = 6.0
let nota2 = 9.0
let nota3 = 4.0
let media = ((nota1 + nota2 + nota3) / 3).toFixed(2)
console.log('O resultado da média é ' + media);


/* 6) Desconto:
        ● Crie um programa que calcule o valor final de um produto com desconto.
        ● As variáveis devem informar o preço original e o percentual de desconto.
        ● Exiba o resultado com uma mensagem personalizada. */

let precoOriginal = 30
let desconto = 10
let valorDesconto = precoOriginal * (desconto / 100)
let valorFinal = precoOriginal - valorDesconto 
console.log('O valor do seu produto com o desconto é: R$ ' + valorFinal.toFixed(2));


/* 7) Imposto de Renda:
        ● Simule um cálculo simplificado de imposto de renda, considerando uma tabela de
        alíquotas.
        ● A variável deve informar o salário bruto.
        ● Exiba o resultado com uma mensagem personalizada. */

let salarioBruto = 3000
let impostoDeRenda = 20
let calculoImposto = salarioBruto * (impostoDeRenda / 100)
let salarioLiquido = salarioBruto - calculoImposto
console.log('O seu salário líquido é de: R$ ' + salarioLiquido);


/* 8) Conversor de Moedas:
        ● Crie um conversor de moedas, considerando taxas de câmbio atualizadas.
        ● As variáveis devem guardar o valor das moedas inicial e final.
        ● Exiba o resultado com uma mensagem personalizada. */

let valorReal = 150
let valorEuro = 6.07
let conversao = valorReal * valorEuro
console.log('A conversão de R$ 150 para Euro é de : R$ ' + conversao);


/* 9) Convertendo Celsius para Fahrenheit
        ● Crie uma variável para a temperatura em Celsius e faça a conversão para
        Fahrenheit usando a fórmula (Celsius * 9/5) + 32.
        ● Exiba o resultado com uma mensagem personalizada. */

let celsius = 28
let fahrenheit = (celsius * 9/5) + 32
console.log('A temperatura de 28 graus celsius é de: ' + fahrenheit + ' fahrenheit');


/* 10) Calculadora de IMC (Índice de Massa Corporal)
        ● Crie variáveis para peso (em kg) e altura (em metros).
        ● Calcule o IMC utilizando a fórmula: IMC = peso / (altura * altura).
        ● Exiba o resultado no console.
        ● Pesquise sobre o método toFixed */

let pesoImc = 65
let alturaImc = 1.53
let imc = pesoImc / (alturaImc * alturaImc)
console.log('O IMC é de: ' + imc.toFixed(2));