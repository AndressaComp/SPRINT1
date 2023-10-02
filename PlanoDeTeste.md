# Planejamento de Testes
## 1. Nome do Projeto
Adequação Funcional da rota /movies e /tickets do Cinema API.
## 2. Escopo
Cobrir toda a rota /movies e /tickets do Cinema API.
## 3. Pessoas Envolvidas
Andressa Monteiro dos Santos.
## 4. Funcionalidades ou Módulos a Serem Testados
### **/movies** :movie_camera:
- Fluxo da API de /movies, CRIAR, LISTAR, ALTERAR e DELETAR (heuristica CRUD).

### **/tikets** :ticket:
- Cobertura de endpoint.
- Cobertura de VERBO GET, POST, DELETE e PUT.

## 5. Local do Teste
- Postman.
- k6.

## 8. Ferramentas
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com"><img src="https://github.com/AndressaComp/SPRINTs/blob/pb_sprint8/imagens/git.png?v=4?s=100" width="100px;" alt="Git"/><br /><sub><b>GitHub</b></sub></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.postman.com/downloads/"><img src="https://github.com/AndressaComp/SPRINTs/blob/pb_sprint8/imagens/pos.PNG?v=4?s=100" width="100px;" alt="Postman"/><br /><sub><b>Postman</b></sub></td>
      <td align="center" valign="top" width="14.28%"><a href="https://xmind.app/download/"><img src="https://github.com/AndressaComp/SPRINTs/blob/pb_sprint8/imagens/xmind.png?v=4?s=100" width="100px;" alt="xmind"/><br /><sub><b>XMind</b></sub></td>
      <td align="center" valign="top" width="14.28%"><a href="https://start.atlassian.com/"><img src="https://github.com/AndressaComp/SPRINTs/blob/pb_sprint8/imagens/jira.png?v=4?s=100" width="100px;" alt="jira"/><br /><sub><b>Jira Software</b></sub></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jmeter.apache.org/download_jmeter.cgi"><img src="https://github.com/AndressaComp/SPRINTs/blob/pb_sprint8/imagens/jmeter.png?v=4?s=100" width="100px;" alt="Jmeter"/><br /><sub><b>JMeter</b></sub></td>
      <td align="center" valign="top" width="14.28%"><a href="https://k6.io/docs/get-started/installation/"><img src="https://github.com/AndressaComp/SPRINTs/blob/pb_sprint8/imagens/k6.png?v=4?s=100" width="100px;" alt="k6"/><br /><sub><b>K6</b></sub></td> 
  </tr>
  </tbody>
</table>

# Resumo da Estratégia
Seguir os testes de acordo com o Cenários Macro na Suíte.

# Resumo dos Testes Exploratórios
Usei a técnica "Tabela de Decisão" para executar os testes exploratórios. Com esse estudo, descobri que mesmo sem um planejamento, é possível fazer vários tipos de testes, podendo usar vários tipos de estratégias para encontrar bugs ou melhorias. Foram gerados 5 testes novos, mas não encontrei nenhum bug fora os que citei ou alguma questão diferente.

# **/movies** :movie_camera:
## Cenários Macro na Suíte
- **Possíveis cenários: Cadastrar**
   - Cadastro de filme bem-sucedido.
   - Tentativa de cadastro com title já utilizado.
   - Tentativa de criar um novo filme ao não encontrar ID informado no PUT.
   - Tentativa de cadastro com campos obrigatórios em branco.
   - Tentativa de cadastro com description em branco.
   - Tentativa de cadastro com data inexistente.

- **Possíveis cenários: Chamadas**
   - Listagem de todos os filmes cadastrados.
   - Tentativa de ações e chamadas para filmes inexistentes.

- **Possíveis cenários: Atualização**
   - Atualização dos dados de um filme cadastrado.
   - Atualização dos dados de um filme não cadastrado.

- **Possíveis cenários: Exclusão**
   - Exclusão de um filme cadastrado.
   - Exclusão de um filme não cadastrado.

## Critérios Usados
| Requisito Funcional | Descrição |
| :-: | :- |
| **Criando um Novo Filme** | ======================================================== |
| RF_001 | O usuário administrador da API envia uma solicitação POST para o endpoint /movies com os detalhes do filme. |
| RF_002 | O sistema valida os campos obrigatórios e a unicidade do título. |
| RF_003 | Se as validações passarem, o sistema cria o filme e atribui um ID único. |
| RF_004 | O sistema retorna uma resposta de sucesso com o status 201 Created, incluindo o ID do filme. |
| **Lista de Filmes** | ======================================================== |
| RF_005 | O usuário envia uma solicitação GET para o endpoint /movies. |
| RF_006 | O sistema retorna uma lista de todos os filmes cadastrados com detalhes. |
| **Obter detalhes de um Filme pelo ID** | ======================================================== |
| RF_007 | O usuário envia uma solicitação GET para o endpoint /movies/{id}, onde {id} é o ID do filme desejado. |
| RF_008 | O sistema verifica a existência do filme e retorna seus detalhes. |
| RF_009 | Se o filme não existir, o sistema retorna uma resposta de erro com o status 404 Not Found. |
| **Atualizar um Filme pelo ID** | ======================================================== |
| RF_010 | O usuário administrador da API envia uma solicitação PUT para o endpoint /movies/{id}, onde {id} é o ID do filme a ser atualizado. |
| RF_011 | O sistema verifica a existência do filme, permite a atualização de campos específicos e valida os dados. |
| RF_012 | Se todas as validações passarem, o sistema atualiza os detalhes do filme. |
| RF_013 | O sistema retorna uma resposta de sucesso com o status 200 OK e os detalhes atualizados do filme. |
| **Excluir um Filme pelo ID** | ======================================================== |
| RF_014 | O usuário administrador da API envia uma solicitação DELETE para o endpoint /movies/{id}, onde {id} é o ID do filme a ser excluído. |
| RF_015 | O sistema verifica a existência do filme e o remove permanentemente do banco de dados. |
| RF_016 | O sistema retorna uma resposta de sucesso com o status 204 No Content. |
---
| Requisito Não Funcional | Descrição |
| :-: | :- |
| RNF_001 | A API deve ser capaz de processar pelo menos 100 solicitações de criação de filmes por segundo. |
| RNF_002 | O tempo médio de resposta para a criação de um novo filme não deve exceder 200 milissegundos. |
| RNF_003 | A API deve ser capaz de responder a solicitações GET de listagem de filmes em menos de 100 milissegundos. |
| RNF_004 | A lista de filmes deve ser paginada, com no máximo 20 filmes por página. |
| RNF_005 | A API deve ser capaz de responder a solicitações GET de detalhes de um filme em menos de 50 milissegundos. |
| RNF_006 | A API deve ser capaz de processar pelo menos 50 solicitações de atualização de filmes por segundo. |
| RNF_007 | O tempo médio de resposta para a atualização dos detalhes de um filme não deve exceder 300 milissegundos. |
| RNF_008 | A API deve ser capaz de processar pelo menos 30 solicitações de exclusão de filmes por segundo. |
| RNF_009 | O tempo médio de resposta para a exclusão de um filme não deve exceder 400 milissegundos. |

## Caso de Teste
| Código | Prioridade | Caso de Teste | Requisito Funcional | Descrição |
| :-: | :-: | :-: | :-: | :- |
| 001 | 100% | CT_001 | Todos os requisitos de criação | Criar um filme com sucesso |
| 002 | 90% | CT_002 | RF_002 | Tentar criar um filme sem o campo title |
| 003 | 95% | CT_003 | RF_002 | Tentar criar um filme com pelo menos um campo em branco |
| 004 | 40% | CT_004 | Todos os requisitos de detalhes | Tentativa de chamada de filme inexistente |
| 005 | 60% | CT_005 | RF_002 | Tentativa de criação de filme com title já cadastrado |
| 006 | 94% | CT_006 | - | Tentativa de criação de filme com o ID informado no PUT |
| 007 | 97% | CT_007 | - | Tentativa de cadastro de filme com title já cadastrado utilizando PUT |
| 008 | 96% | CT_008 | RF_004 | Tentativa de cadastro de filme com retorno de status code 201 |
| 009 | 93% | CT_009 | - | Tentativa de exclusão de filme com retorno de status code 201 |
| 010 | 92% | CT_010 | RF_016 | Tentativa de atualização de filme com retorno de status code 204 |
| 011 | 91% | CT_011 | RF_002 | Tentativa de criação de filme com data inexistente |

## Testes Candidatos à Automação
| Código | Caso de Teste |
| :-: | :-: |
| 002 | CT_002 |
| 003 | CT_003 |
| 005 | CT_005 |
| 006 | CT_006 |
| 007 | CT_007 |
| 008 | CT_008 |
| 009 | CT_009 |
| 010 | CT_010 |
| 011 | CT_011 | 

# **/tikets** :ticket:
## Cenários Macro na Suíte
- **Possíveis cenários: Cadastrar**
   - Cadastro de ticket bem-sucedido.
   - Tentativa de cadastro com seatNumber já utilizado e com a mesma data.
   - Tentativa de criar um novo ticket ao não encontrar ID informado no PUT.
   - Tentativa de cadastro com campos obrigatórios em branco.
   - Tentativa de cadastro com movieId em branco.
   - Tentativa de cadastro com data inexistente.
 
- **Possíveis cenários: Chamadas**
   - Listagem de todos os tickets cadastrados.
   - Tentativa de ações e chamadas para ticket inexistentes.

- **Possíveis cenários: Atualização**
   - Atualização dos dados de um ticket cadastrado.
   - Atualização dos dados de um ticket não cadastrado.

- **Possíveis cenários: Exclusão**
   - Exclusão de um ticket cadastrado.
   - Exclusão de um ticket não cadastrado.

## Critérios Usados
| Requisito Funcional | Descrição |
| :-: | :- |
| !!!!!! | O usuário envia uma solicitação POST para o endpoint /tickets com os seguintes detalhes do ingresso: |
| RF_001 | ID do Filme (movieId) - Identifica o filme para o qual o ingresso está sendo reservado. |
| RF_002 | ID do Usuário (userId) - Identifica o usuário que está fazendo a reserva. |
| RF_003 | Número do Assento (seatNumber) - O número do assento que o usuário deseja reservar. |
| RF_004 | Preço do Ingresso (price) - O preço do ingresso para o filme. |
| RF_005 | Data de Apresentação (showtime) - A data e hora da apresentação do filme. |
| RF_006 | O sistema valida se todos os campos obrigatórios estão preenchidos corretamente. |
| RF_007 | O sistema verifica se o número do assento está dentro do intervalo de 0 a 99. |
| RF_008 | O sistema verifica se o preço do ingresso está dentro do intervalo de 0 a 60. |
| RF_009 | Se todas as validações passarem, o sistema cria uma reserva de ingresso com os detalhes fornecidos. |
| RF_010 | O sistema atribui um ID único à reserva de ingresso. |
| RF_011 | O sistema retorna uma resposta de sucesso com o status 201 Created, incluindo o ID da reserva de ingresso. |

| Requisito Não Funcional | Descrição |
| :-: | :- |
| RNF_001 | A API deve ser capaz de processar pelo menos 50 solicitações de reserva de ingressos por segundo. |
| RNF_002 | O tempo médio de resposta para a reserva de um ingresso não deve exceder 300 milissegundos. |

## Caso de Teste
| Código | Prioridade | Caso de Teste | Requisito Funcional | Descrição |
| :-: | :-: | :-: | :-: | :- |
| 012 | 100% | CT_012 | Todos os requisitos | Criar um ticket com sucesso |
| 013 | 90% | CT_013 | RF_001 | Tentar criar um ticket sem o campo movieId |
| 014 | 95% | CT_014 | RF_001 | Tentar criar um ticket com pelo menos um campo em branco |
| 015 | 40% | CT_015 | - | Tentativa de chamada de ticket inexistente |
| 016 | 60% | CT_016 | RF_005 | Tentativa de criação de ticket com data fora do horário |
| 017 | 94% | CT_017 | - | Tentativa de criação de ticket com o ID informado no PUT |
| 018 | 97% | CT_018 | RF_003 e RF_005 | Tentativa de cadastro de ticket com seatNumber já cadastrado no mesmo horário |
| 019 | 96% | CT_019 | RF_010 | Tentativa de cadastro de ticket com retorno de status code 201 |
| 020 | 93% | CT_020 | - | Tentativa de exclusão de ticket com retorno de status code 200 |
| 021 | 92% | CT_021 | - | Tentativa de atualização de ticket com retorno de status code 200 |
| 022 | 91% | CT_022 | - | Tentativa de chamada de ticket existente |

## Testes Candidatos à Automação
| Código | Caso de Teste |
| :-: | :-: |
| 013 | CT_013 |
| 014 | CT_014 |
| 015 | CT_015 |
| 016 | CT_016 |
| 017 | CT_017 |
| 018 | CT_018 |
| 019 | CT_019 |
| 020 | CT_020 |
| 021 | CT_021 |
| 022 | CT_022 |

# Testes Exploratórios
## **/movies** :movie_camera:
| Código | title | description | launchdate | showtimes |
| :-: | :-: | :-: |  :-: | :-: |
| === | === | Variáveis - Tipos de Dados | === | === |
| TE01 | Vazio | Vazio | Vazio | Vazio |
| TE02 | 0 | -1 | 0 | -1 |
| TE03 | Texto | Texto | Texto | Texto |
| === | === | Variáveis - Valor dos Dados | === | === |
| TE04 | Vazio | Vazio | Vazio | Vazio |
| TE05 | 0 | 0 | 0 | 0 |
| TE06 | Texto | Texto | Texto | Texto |

## **/tikets** :ticket:
| Código | movieId | userId | seatNumber | price | showtime |
| :-: | :-: | :-: | :-: | :-: | :-: |
| === | === | Variáveis - Tipos de Dados | === | === | === |
| TE01 | Vazio | Vazio | Vazio | Vazio |  Vazio |
| TE02 | 0 | -1 | 0 | -1 | 0 |
| TE03 | Texto | Texto | Texto | Texto | Texto |
| === | === | Variáveis - Valor dos Dados | === | === | === |
| TE04 | Vazio | Vazio | Vazio | Vazio |  Vazio |
| TE05 | 0 | 0 | 0 | 0 | 0 |
| TE06 | Texto | Texto | Texto | Texto |  Texto |

# Testes de Performance
As rotas testadas serão /movies e /tickets, cobrindo os VERBO GET, POST, DELETE e PUT.

## **/movies** :movie_camera:
### Volumetria
- Suportar 100 solicitações de criação de filmes por segundo.
- Suportar 100 solicitações de listagem de filmes por segundo.
- Suportar 50 solicitações de listagem de um filme por segundo.
- Suportar 50 solicitações de atualização de um filme por segundo.
- Suportar 30 solicitações de exclusão de filmes por segundo.

### Métricas
- Tempo médio de resposta de criação: 200ms.
- Tempo médio de resposta de listagem: 100ms.
- Tempo médio de resposta de detalhes de um filme: 50ms.
- Tempo médio de resposta de atualização: 300ms.
- Tempo médio de resposta de exclusão: 400ms.

## **/tikets** :ticket:
### Volumetria
- Suportar 50 solicitações de reserva de ingressos por segundo.

### Métricas
- Tempo médio de resposta para a reserva de um ingresso: 300ms.

## Casos de Teste de Performance

| Código | Caso de Teste | Requisição | Dado |
| :-: | :-: | :-: | :-: |
| **Volumetria** | =========== | ==== | ===== |
| CTP_001 | Criar filme | POST | 100 solicitações |
| CTP_002 | Listar filmes | GET | 50 solicitações |
| CTP_003 | Listar filme | GET | 50 solicitações |
| CTP_004 | Atualizar filme | PUT | 50 solicitações |
| CTP_005 | Excluir filmes | DELETE | 30 solicitações |
| CTP_006 | Criar ticket | POST | 50 solicitações |
| **Métrica** | =========== | ==== | ===== |
| CTP_007 | Criar filme | POST | 200ms |
| CTP_008 | Listar filmes | GET | 100ms |
| CTP_009 | Listar filme | GET | 50ms |
| CTP_010 | Atualizar filme | PUT | 300ms |
| CTP_011 | Excluir filmes | DELETE | 400ms |
| CTP_012 | Criar ticket | POST | 300ms |

