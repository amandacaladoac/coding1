// Var pode ser reatribuído e redeclarar
var rotulo = 'amanda'
console.log(rotulo)

var rotulo = 12345
console.log(rotulo)

// Let não permite redeclarar, mas pode reatribuir o valor
let produto = 'pincel' 
// let produto = 'pincel' 
produto = 'tinta'
console.log(produto)

// Const não permite reatribuir, nem redeclarar, o valor sempre vai ser o mesmo
const numero = 10 
// const numero = 20
// numero = 30
console.log(numero) 

// TIPOS DE DADOS 
// STRING - "Hello World" - 'Hello World' - `Hello World`
   console.log('Hello' + ' ' + 'World')
   console.log('Hello' + 'World')

   myName = "Maria"
   console.log("Hello" + ' ' + myName)

   myName2 = "2"
   console.log(`Hello ${myName2}`)

// TIPOS PRIMITIVOS 
// BOLEAN - true/false
// Undefined - Valor não definido
// NULL - Representa um valor vazio
// Number - Valores numéricos, podem ser inteiros ou decimais ('1', '1.1')

// OPERADORES
// lógicos, comparação e matemáticos

// dois iguais ele compara a imagem
console.log(2 == "2")

// três iguais ele compara o tipo de dado
console.log(2 === "2")


console.log(15 > 10)
