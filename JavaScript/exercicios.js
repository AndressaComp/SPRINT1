console.log('1 - Escreva uma função que usa 2 números e retorna o maior entre eles.')

let n = maior(1, 5);
console.log(n);

function maior(n1, n2) {
  if (n1 > n2)
    return n1;
  return n2;
}
console.log('-------------------------------------------------------------------------------------');
console.log('2 - FizzBuzz:')
//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz
//Não divisível por 3 e 5 => Entrada

let resultado = fizzBuzz(9);
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number')
    return 'Não é um número';
  if (typeof entrada % 3 === 0)
    return 'Fizz';
  if (typeof entrada % 5 === 0)
    return 'Buzz';
  if (typeof entrada % 3 === 0 && entrada % 5 === 0)
    return 'FizzBuzz';
}
console.log('-------------------------------------------------------------------------------------');
console.log('3 - Crie uma função que controle a velocidade.')
