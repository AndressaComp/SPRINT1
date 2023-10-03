<h1 align="center">Cinema API</h1>
<h1>Introdução</h1>
<p align="justify">
Esta API possui a lógica do back-end de lógica específica para a criação de um sistema de cinemas.
Ela auxilia no aprendizado e na prática de testes, tendo várias funcionalidades, como autenticação, CRUD (Create, Read, Update, Delete), manipulação de dados JSON e respostas personalizadas, ela simula o cadastro, edição, busca e exclusão de um filme, e sumila a compra de um ingresso, assim permitindo que os desenvolvedores aprendam, experimentem e depurem suas habilidades de integração de API sem se preocupar com o impacto em sistemas de produção ou em serviços reais.</br>
</p>

# Como Utilizar
## Plataforma
É necessário ter o aplicativo [Visual Studio Code](https://code.visualstudio.com/download) instalado na sua máquina.

## Executar a API
Para executar a API ServeRest localmente, deverá instalar o NodeJS (https://nodejs.org/en/download/), e após ter o NodeJS instalado, você deverá abrir qualquer terminal (ex: CMD) e rodar o comando:
```
npm run start
```
Desta forma, a aplicação do ServeRest irá rodar localmente na porta http://localhost:3000.

## Executando o Teste
Para executar o teste, deve seguir os seguintes passos:
1. Crie uma pasta na sua máquina e entre nela por qualquer terminal (ex:Git Bash, CMD).
2. Estando dentro a pasta criada, deverá puxar para sua máquina a branch que contém o teste, pelo terminal, rode o comando:
```
git clone -b pb_sprint8 https://github.com/AndressaComp/SPRINTs.git
```
4. Abrir a pasta `projeto`, criar outra pasta e instale as dependências do Node.js usando o npm:
```
npm install
```
5. Com as dependências instaladas, você pode executar os testes de desempenho K6 usando o seguinte comando:
```
k6 run caminho/nome_do_aquivo.js
```

# Testes Executados
Uma introdução sobre os tipos de testes que foram executados na API ServeRest:
- Testes de Funcionalidade: Os testes de funcionalidade na API ServeRest envolvem a verificação do comportamento funcional dos endpoints e recursos oferecidos pela API. Isso inclui testar se os métodos HTTP (GET, POST, PUT, DELETE) funcionam corretamente, se os dados são manipulados adequadamente e se as respostas estão de acordo com a especificação da API.
- Testes de Autenticação: Muitas APIs exigem autenticação para acessar recursos protegidos. Os testes de autenticação na API ServeRest permitem aos desenvolvedores praticar a autenticação básica e entender como passar tokens ou credenciais de acesso nas solicitações para obter acesso aos recursos protegidos.
- Testes de CRUD (Create, Read, Update, Delete): Esses testes envolvem a criação, leitura, atualização e exclusão de dados por meio dos endpoints da API. Os desenvolvedores podem aprender a realizar operações básicas de banco de dados por meio da API ServeRest.
- Testes de Validação de Dados: Os testes de validação de dados na API ServeRest permitem verificar se os dados enviados para a API estão corretamente validados e se a API responde com mensagens de erro apropriadas em caso de dados inválidos.

# Arquitetura do Projeto
- :file_folder:**data:** usada para armazenar arquivos de dados que podem ser usados nos testes.
- :file_folder:**static:** usada para armazenar dados estáticos, ou seja, que não mudam durante a execução dos testes.
- :file_folder:**servives:** usada para armazenar os serviçoes ou metodos da API.
- :memo:**baseRest:** guarda os métodos utilizados nos testes.
- :memo:**baseService:** está configurada a URL utilizada nos testes.
- :file_folder:**support:** ela guarda recursos adicionais, como funções personalizadas, configurações globais ou arquivos de suporte que podem ser usados nos testes.
-  :file_folder:**base:** usada para armazenar módulos ou utilitários.
-  :memo:**baseChecks:** ela guarda as validações do teste, Status Code e respostas esperadas.
-  :memo:**baseTest:** ela guarda as bibliotecas utilizadas nos testes.
-  :memo:**constants:** ela guarda os ENDPOINTS utilizados.
-  :file_folder:**config:** usada para armazenar arquivos de configuração específicos do seu projeto.
-  :memo:**environment:** ela guarda a URL, as volumetrias e as métricas utilizadas no teste.
-  :file_folder:**tests:** armazena os scripts de testes realizados no projeto.
-  :file_folder:**volumetria:** Scripts de testes de volumetria.

# Quem fez?
Andressa Monteiro dos Santos.

# Contribuições
- Filipe Alves
- Lauren Monici Medina
- Fabio Eloy Passos
