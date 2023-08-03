console.log('1 - Escreva uma função que usa 2 números e retorna o maior entre eles.')

let n = maior(1, 5);
console.log(n);

function maior(n1, n2) {
  if (n1 > n2)
    return n1;
  return n2;
}
console.log('--------------------------------------------------');
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
console.log('--------------------------------------------------');
console.log('3 - Crie uma função que controle a velocidade.')
// Velocidade máxima = 70km
// A cada 5km acima do limite = +1
// Math.Floor() = arredondar valor
// E se pontos maior que 12 = "Carteira Suspendida."

velocidade(81);

function velocidade(valor) {
  if (valor <= 70)
    console.log('Sem pontos.');
  else {
    const pontos = Math.floor(((valor - 70) / 5));
  if (pontos >= 12)
    console.log('Carteira Suspensa com ', pontos, ' pontos.');
  else
    console.log('Pontos: ', pontos);
  }
}
console.log('--------------------------------------------------');
console.log('4 - Crie uma função que exibe se os valores recebidos é par ou impar.');

tipo(3);

function tipo(v) {
  for (let i = 0; i <= v; i++){
    if (i % 2 === 0)
      console.log(i, ' é par.');
    else {
      console.log(i, ' é impar.');
    }
  }
}
console.log('--------------------------------------------------');
console.log('5 - Criar um método para ler propriedades de um objeto e');
console.log('exibir somente as propriedades do tipo string.');

const anime = {
  titulo: 'Kimetsu',
  legendado: true,
  episodios: 12
}
met(anime);
function met(obj) {
  for(prop in obj)
    if(typeof obj[prop] === 'string')
      console.log(prop, obj[prop], typeof(prop))
}
console.log('--------------------------------------------------');
console.log('6 - Criar função somar que retorna a');
console.log('soma de todos os múltiplos de 3 e 5.');
// Armazenar os multiplos de 3
// Armazenar os multiplos de 5
// Somar os dois

soma(10);
function soma(som) {
  let mult3 = 0;
  let mult5 = 0;
  for(i = 0; i <= som; i++){
    if (i % 3 === 0)
      mult3 += i;
      if (i % 5 === 0)
      mult5 += i;
  }
  console.log(mult3, ' + ', mult5, ' = ', mult3+mult5);
}
console.log('--------------------------------------------------');
console.log('7 - Obter a média a partir de um array.');
// 0-59: I
// 60-79: R
// 80-89: B
// 90-100: MB

const array = [80, 79, 86, 95];
console.log(mediaAluno(array));

function mediaAluno(notas) {
  let soma = 0;
  for(let nota of notas) {
    soma += nota;
  }
  const media = soma/(notas.length); // Tamanho do array.
  console.log('Média: ', media);
  if(media < 59) return 'Nota: I';
  if(media < 79) return 'Nota: R';
  if(media < 89) return 'Nota: B';
  return 'Nota: MB';
}
console.log('--------------------------------------------------');
console.log('8 - Criar uma função que exibe a quantidade de asterísticos');
console.log('que aquela linha possui.');

exibir(5);
function exibir(linhas) {
  let padrao = '';
  for (let linha = 1; linha <= linhas; linha++){
    padrao += '*';
    console.log(padrao);
  }
}
console.log('--------------------------------------------------');
console.log('9 - Criar função para mostrar números primos.');

primo(15);
function primo(pri) {
  for(let numero = 2;numero <= pri; numero++) {
    let ehPrimo = true;

    for(let divisor = 2; divisor < numero; divisor++) {
      if(numero % divisor === 0) {
        ehPrimo = false;
        break;
      }
    }
    if(ehPrimo) console.log(numero);
  }
}
console.log('--------------------------------------------------');
console.log('10 - Criar um objeto endereço.');
// Rua
//Cidade
// CEP
// exibirEndereço(endereco)

let endereco = {
  rua : 'a',
  cidade : 'b',
  cep : 'c'
};

function exibirEndereco(endereco) {
  for (let chave in endereco)
    console.log(chave,endereco[chave]);
}
exibirEndereco(endereco);
console.log('--------------------------------------------------');
console.log('11 - Criar duas funções para comparar objetos.');

function End(ru,cid,ce) {
  this.ru = ru,
  this.cid = cid,
  this.ce = ce
}
const endereco1 = new End('a','b','c');
const endereco2 = new End('a','b','c');

function saoIguais(endereco1,endereco2) {
  return endereco1.ru === endereco2.ru &&
          endereco1.cid === endereco2.cid &&
          endereco1.ce === endereco2.ce
}
console.log(saoIguais(endereco1,endereco2));
function temEnderecoMemoriaIguais(endereco1,endereco2) {
  // Comparando se a referência do objeto aponta para o mesmo local na memória
  return endereco1 === endereco2;
}
console.log(temEnderecoMemoriaIguais(endereco1,endereco2));
console.log('--------------------------------------------------');
console.log('12 - Criar um objeto de postagem de blog.');

let postagem = {
  titulo : 'a',
  mensagem : 'b',
  autor : 'c',
  visualizacoes : 10,
  comentarios : [
    {autor : 'a', mensagem: 'b'}
  ],
  estaAoVivo : true
}
console.log(postagem);
console.log('--------------------------------------------------');
console.log('13 - Criar um objeto postagem usando a função de construtor.');

function Postagem(titulo,mensagem,autor)  {
  this.titulo = titulo,
  this.mensagem = mensagem,
  this.autor = autor,
  this.visualizacoes = 0,
  this.comentarios = [],
  this.estaAoVivo = false
}
let postag = new Postagem('a','b','c');
console.log(postag);
console.log('--------------------------------------------------');
console.log('14 - Criar um array de objetos de faixa de preço.');

let faixas = [
  {tooltip: 'até R$700', minimo: 0, maximo: 700},
  {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
  {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 9999999}
]
console.log(faixas);
