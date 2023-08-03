# Variáveis
Uma variável é um objeto capaz de reter e representar um valor ou expressão.
Ela não pode ser iniciada com:
- Número;
- Letra maiúscula.
- Caracteres especiais.

Só poder ser iniciada com **letra minúscula**.
**Exemplo:** let nomeCompleto = ‘Andressa Monteiro’;

# Constantes
Uma variável constante não pode mudar o valor.
**Dica:** Utilizar quando os valores não precisam ser redefinidos.
**Exemplo:** const valor = 5;

# Tipos Primitivos
**Valores:**
- String: Nome, CEP, telefone...
- Number: Números calculáveis. Ex.: Valor, idade, porcentagem...
- Boolean: Verdadeiro ou falso / True or False
- Underfind: Sem definição. Ex.: let sobrenome;
- Null: Reseta um valor, vazio.

# Tipagem Dinâmica
Não precisa atribuir o valor na variável, na própria execução do programa, ele irá descobrir o valor definido.
**Exemplo (no console):** typeof nome

# Objetos
Junta informações em um lugar só.
**Exemplo:** 
let pessoa = {
	nome: ‘Andressa’,
	idade: 25
};

# Arrays
É um conjunto de dados que pode ser acessa por um índice.
**Exemplo:**
let família = [true,45,’Andressa’,17];

# Functions
Controla o fluxo de execução.
**Exemplo:** function alterarTamanho(){
	aumentarTamanho = “”;
};
**OU**
function alterarTamanho(tamanho){
	aumentarTamanho = tamanho;
};
aumentarTamanho(200);
**OU**
function alterarTamanho(tamanho, altura){
	aumentarTamanho = tamanho + ‘ ’ + altura;
};
aumentarTamanho(200 , 15);

Para chamar a função: alterarTamanho();

# Tipos de Funções
1. Realiza uma tarefa, mas não devolve nada;
function dizerNome(){
	Console.log(‘Andressa’);
}
dizerNome();

2. Realiza um cálculo ou operação, e devolve um valor.
function multiplicarPorDois(valor){
	return valor * 2;
}
let resultado = multiplicarPorDois(5);
console.log(resultado);

# Operadores
## Aritméticos(matemáticos);
+, -, *, /, **
Incremento: ++
Decremento: --
console.log(++valor);
## Atribuição;
=, +=, -=
let valor = 100;
## Comparação;
- Igualdade estrita.
console.log(1 === 1); | true | comparação de valor e tipo
- Igualdade solta.
console.log(1 == 1); | true | compara apenas os valores
## Ternário;
let tipo = pontos > 100 ? ‘premium’ : ‘comum’;
## Lógicos;
- e (&&)
- ou (||)
- not (!)
## Bitwise. | Não Booleanos
**Falsy:**
- Undefind
- Null
- 0
- False
- ‘’
- NaN - not a number

# If..Else 
if (hora > && hora < 12) {
	console.log(“Bom dia”);
}
else if (hora > 12 && hora < 18) {
	console.log(“Boa tarde”);
}
else {
Console.log(“Boa noite”);
}

# Switch..Case
Switch (permissao) {
	case ‘comum’:
	console.log(‘Usuário comum’);
	break;

	case ‘gerente’:
	console.log(‘Usuário gerente’);
	break;
	case ‘diretor’:
	console.log(‘Usuário diretor’);
	break;

	default:
	console.log(‘Usuário não reconhecido!’);
}

# Laço / Loop 
## For
for(let i = 0; i < 5; i++) {
 	console.log(‘Estou aprendendo!’,i);
}
## While
let i = 5;
while (i >= 1) {
	if(i % 2 !== 0) {
		console.log(i);
	}
	i--;
}
## Do..While
let i = 0;
do {
console.log(‘Digitando...’,1);
i++;
} while (i < 10)

## For..In
const pessoa = {
	nome: ‘Andressa’,
	idade: 19
};
for(let chave in pessoa) {
	console.log(chave, pessoa.nome ou pessoa[‘nome’]);
}
const cores = [‘Vermelho’, ‘Azul’, ‘Verde’ ];
for(let indice in cores) {
	console.log(índice, cores[indice]);
}
## For..Of
for(let cor of cores){
	console,log(cor);
}

# Factory Functions (Função de Fábrica)
CamelCase - umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
	return {
		marcaCelular,
		tamanhoTela,
		capacidadeBateria,
		ligar() {
			console.log(“Fazendo ligação...”)
		}
}
}
const celular1 = criarCelular(‘Zenfone’,5.5,5000);
console.log(celular1);

# Constructor Functions (Função de Construtor)
Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
	this.marcaCelular = marcaCelular,
	this.tamanhoTela = tamanhoTela,
	this.capacidadeBateria = capacidadeBateria,
	this.ligar = function() {
		console.log(“Fazendo ligação...”);
	}
}
const celular = new Celular(“ASUS”, 5.5, 5000);
console.log(celular);

# Natureza Dinâmica de Objetos
const mouse = {
	cor : ‘red’,
	marca : ‘dazz’
}
mouse.velocidade = 5000;
mouse.trocarDPI = function() {
	console.log(‘Mudando DPI’);
}
console.log(mouse);

# Clonando Objetos
const novoObjeto = Object.assign({},celular);
Console.log(novoObjeto);
OU
const objeto2 = {...celular};

# Math
Math.random(): Gera um número aleatório entre 0 a 1.
Math.max(3,6,8,10): Traz o maior valor.
Math.min(3,6,8,10): Traz o menor valor.

# String
- **Tipo primitivo:**
const mensagem = ‘Minha primeira mensagem.’;
- **Tipo objeto:**
const outraMensagem = new String(‘Bom dia’);

# Template Literal (Caracteres especiais não infligem)
const nome = ‘Andressa’
const mensagem = 
`Ola ${nome} 
Minha primeira mensagem.`;

# Date
const data1 = new Date();
const data2 = new Date(‘March 06 2019 09:30’);
const data3 = new Date(2019,03,06,9,30);

# Encontrando Elementos no Array
const marcas = [
	{id:1, nome: ‘a’},
	{id:2, nome: ‘b’}
];
const marca = marcas.find(function(marca){ (traz o primeiro elemento da condição)
	return marca.nome === ‘a’;
});
console.log(marca);

# Arrow Functions
Console.log(marcas.find(marca => return marca.nome === ‘a’ ));

# Combinando Arrays
const números = [1,2,3,4,5];
const combinado = números.join(‘.’);
console.log(combinado);
1.2.3.4.5

# Recebendo Dados
prompt(‘Digite algo’);
