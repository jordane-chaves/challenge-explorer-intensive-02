/**
 * Generate a random number between values.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.round(Math.random() * (max - min) + min)
}

/*
  1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
*/
alert('Hello World!')

/*
  2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
*/
let firstRandomNumberToSum = getRandomNumber(1, 100)
let secondRandomNumberToSum = getRandomNumber(1, 100)

console.log(
  `${firstRandomNumberToSum} + ${secondRandomNumberToSum} =`,
  firstRandomNumberToSum + secondRandomNumberToSum
)

/*
  3. Crie um script que declare uma variável e verifique se o seu valor é um número.
    Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
*/
const numberValue = 1
const isNumberMessage = typeof numberValue === 'number'
  ? 'É um número'
  : 'Não é um número'

console.log(numberValue, isNumberMessage)

/*
  4. Crie um script que declare uma variável e verifique se o seu valor é uma string.
    Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
*/
const stringValue = 'any-value-here'
const isStringMessage = typeof stringValue === 'string'
  ? 'É uma string'
  : 'Não é uma string'

console.log(stringValue, isStringMessage)

/*
  5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.
    Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
*/
const booleanValue = true
const isBooleanMessage = typeof booleanValue === 'boolean'
  ? 'É um booleano'
  : 'Não é um booleano'

console.log(booleanValue, isBooleanMessage)

/*
  6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
*/
let firstRandomNumberToSubtract = getRandomNumber(1, 100)
let secondRandomNumberToSubtract = getRandomNumber(1, 100)

console.log(
  `${firstRandomNumberToSubtract} - ${secondRandomNumberToSubtract} =`,
  firstRandomNumberToSubtract - secondRandomNumberToSubtract
)

/*
  7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
*/
let firstRandomNumberToMultiply = getRandomNumber(1, 100)
let secondRandomNumberToMultiply = getRandomNumber(1, 100)

console.log(
  `${firstRandomNumberToMultiply} * ${secondRandomNumberToMultiply} =`,
  firstRandomNumberToMultiply * secondRandomNumberToMultiply
)

/*
  8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/
let firstRandomNumberToDivide = getRandomNumber(1, 100)
let secondRandomNumberToDivide = getRandomNumber(1, 100)

console.log(
  `${firstRandomNumberToDivide} / ${secondRandomNumberToDivide} =`,
  firstRandomNumberToDivide / secondRandomNumberToDivide
)

/*
  9. Crie um script que declare uma variável e verifique se o seu valor é um número par.
    Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
*/
const randomNumberIsEven = getRandomNumber(1, 100)
const isEvenMessage = randomNumberIsEven % 2 === 0
  ? 'É um número par'
  : 'Não é um número par'

console.log(randomNumberIsEven, isEvenMessage)

/*
  10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
    Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/
const randomNumberIsOdd = getRandomNumber(1, 100)
const isOddMessage = randomNumberIsOdd % 2 === 1
  ? 'É um número ímpar'
  : 'Não é um número ímpar'

console.log(randomNumberIsOdd, isOddMessage)
