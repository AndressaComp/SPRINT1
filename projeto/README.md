<h1 align="center">ServeRest</h1>
<h1>Introdução</h1>
<p align="justify">
A ServeRest é uma API REST gratuita que simula uma loja virtual com intuito de servir de material de estudos de testes de API.
Ela oferece uma ampla gama de recursos que podem ser explorados e usados para testar várias funcionalidades comuns encontradas em APIs reais, como autenticação, CRUD (Create, Read, Update, Delete), manipulação de dados JSON, respostas personalizadas e muito mais.</br>
A API ServeRest é frequentemente usada em ambientes de desenvolvimento e teste, permitindo que os desenvolvedores aprendam, experimentem e depurem suas habilidades de integração de API sem se preocupar com o impacto em sistemas de produção ou em serviços reais.</br>
Ao longo dessa jornada, realizei alguns testes para explorar os diferentes aspectos da API ServeRest. Comecei com testes de funcionalidade, onde pude verificar como os endpoints e recursos da API respondiam às solicitações HTTP, e aprendi a interpretar as respostas retornadas.
Os testes de CRUD me permitiram praticar a criação, leitura, atualização e exclusão de dados, simulando interações de banco de dados por meio da API. Também me proporcionou a oportunidade de experimentar respostas personalizadas, permitindo que eu simule diferentes cenários, como erros ou respostas personalizadas para testar a resiliência do meu aplicativo. Além disso, pude verificar a validação de dados e como a API lida com entradas inválidas.</br>
Experimente meus testes da ServeRest descubra os tipos de códigos, testes e validações utilizei, sendo abertos a reportação de bugs e/ou melhorias.
</p>

# Como Utilizar
## Plataforma
É necessário ter o aplicativo [Visual Studio Code](https://code.visualstudio.com/download) instalado na sua máquina.

## Executar a API ServeRest
Para executar a API ServeRest localmente, deverá instalar o NodeJS (https://nodejs.org/en/download/), e após ter o NodeJS instalado, você deverá abrir qualquer terminal (ex: CMD) e rodar o comando:\
`npx serverest@latest`\
Desta forma, a aplicação do ServeRest irá rodar localmente na porta http://localhost:3000.

## Executando o Teste
Para executar o teste, deve seguir os seguintes passos:
1. Crie uma pasta na sua máquina e entre nela por qualquer terminal (ex:Git Bash, CMD).
2. Estando dentro a pasta criada, deverá puxar para sua máquina a branch que contém o teste, pelo terminal, rode o comando:\
`git clone -b pb_sprint7 https://github.com/AndressaComp/SPRINTs.git`\
3. Abrir a pasta `projeto` no VS Code.
4. Entra na pasta teste, seguindo a rota `tests/teste.js`.
5. Execute a API ServRest no terminal pelo comando:\
`npx serverest@latest`
6. Abra outro terminal, ou abra o terminal no VS Code e rode o comando:\
`k6 run tests/teste.js`

# Testes Executados
Uma introdução sobre os tipos de testes que foram executados na API ServeRest:
- Testes de Funcionalidade: Os testes de funcionalidade na API ServeRest envolvem a verificação do comportamento funcional dos endpoints e recursos oferecidos pela API. Isso inclui testar se os métodos HTTP (GET, POST, PUT, DELETE) funcionam corretamente, se os dados são manipulados adequadamente e se as respostas estão de acordo com a especificação da API.
- Testes de Autenticação: Muitas APIs exigem autenticação para acessar recursos protegidos. Os testes de autenticação na API ServeRest permitem aos desenvolvedores praticar a autenticação básica e entender como passar tokens ou credenciais de acesso nas solicitações para obter acesso aos recursos protegidos.
- Testes de CRUD (Create, Read, Update, Delete): Esses testes envolvem a criação, leitura, atualização e exclusão de dados por meio dos endpoints da API. Os desenvolvedores podem aprender a realizar operações básicas de banco de dados por meio da API ServeRest.
- Testes de Validação de Dados: Os testes de validação de dados na API ServeRest permitem verificar se os dados enviados para a API estão corretamente validados e se a API responde com mensagens de erro apropriadas em caso de dados inválidos.

# Testes
Explicando os códigos utilizados, bases utilizadas, importações e exportações, variáveis e funções executadas no projeto.

## Importações de Bibliotecas e Classes
```
1   import { sleep } from 'k6';
2   import { SharedArray } from 'k6/data';
3   import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../support/base/baseTest.js';
```
1. Importanto a request `sleep` da biblioteca k6, essa request suspende a execução da VU por um período especificado.
2. Importando a request `SharedArray` da biblioteca k6 do modulo data, nessa request dado um nome e uma função que retorna um array, o construtor SharedArray retorna o mesmo array, mas compartilhando a memória do array entre VUs.
3. Importanto as classes `BaseRest, BaseChecks, ENDPOINTS, testConfig` da pasta `baseTest`, ao qual está exportando as outras classes utilizadas no projeto, explicando cada uma delas:

- ### BaseRest
Importando a pasta `baseService`, onde está configurada a URL utilizada, a baseRest guarda os métodos utilizados no teste, estando cunfigurados para receber os valores sem precisar reescrever no arquivo teste.

- ### BaseChecks
Esta classe guarda as validações do teste, Status Code e respostas esperadas.

- ### ENDPOINTS
Esta classe guarda os valores dos endpoints utilizadas nas chamadas das requisições.

- ### testConfig
Esta classe guarda a URL e as métricas utilizadas no teste.

## Exportando o options
```
5   export const options = testConfig.options.smokeThresholds;
```
Exportando o `options` da classe `testConfig`, será executada as métricas configuradas no `smokeThresholds`.

## Criando Variáveis
`8   const base_uri = testConfig.environment.hml.url;` Dando valor da url para a constante `base_uri`.
`9   const baseRest = new BaseRest(base_uri);` Criando uma nova `baseRest` com o valor da `base_uri`.
`10   const baseChecks = new BaseChecks();` Criando uma nova `baseChecks`.

## Chamando a Massa de Dados
```
12   const data = new SharedArray('Users', function () {
13       const jsonData = JSON.parse(open('../data/static/user.json'));
14       return jsonData.users;
15   });
```
Chamando a massa de dados criada no arquivo `user.json` dando o valor dela a variável `data` em formato de Array.

## Criando um Usuário Fixo
```
17   const payload = {
18       "nome": "Fulano da Silva",
19       "email": "fulano5@qa.com",
20       "password": "teste",
21       "administrador": "true"
22   }
```

## Configurando o Ciclo de Vida dos Testes



# Passagem de Conhecimento
- [x] Iniciando projeto base com ServeRest (um script linear smoke para bater na ServeRest e ver que funcionou).
- [x] Organização de pastas (separação de responsabilidades em projetos estruturados).
- [x] Massas de dados estáticas.
- [x] Ciclo de vida dos testes.
- [X] Configurando SETUP e TEARDOWN.
Configurando Services:
   - [x] BaseService.
   - [x] BaseRest.
- [x] Configurando BaseChecks.
- [x] Configurando BaseTest.
- [x] Configurando constants.
- [x] Configurando environments.

