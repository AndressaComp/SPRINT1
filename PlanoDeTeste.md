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
      <td align="center" valign="top" width="14.28%"><a href="https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/ec2-instance-connect-methods.html"><img src="https://github.com/AndressaComp/SPRINTs/blob/pb_sprint8/imagens/ec2.png?v=4?s=100" width="100px;" alt="ecs"/><br /><sub><b>EC2</b></sub></td>
        
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
| RF_001 | Não deverá ser possível a criação de ticket para um filme inexistente |
| RF_002 | Não deve ser possível criar um filme com title já utilizado |
| RF_003 | Caso não seja encontrado filme com o ID informado no PUT, um novo filme deverá ser criado |
| RF_004 | Não deve ser possível cadastrar filme com title já utilizado utilizando PUT |
| RF_005 | Não deverá ser possível cadastrar filmes com datas inexistentes |

## Caso de Teste
| Código | Prioridade | Caso de Teste | Requisito Funcional | Descrição |
| :-: | :-: | :-: | :-: | :- |
| 001 | 100% | CT_001 | RF_001 | Criar um filme com sucesso |
| 002 | 90% | CT_002 | - | Tentar criar um filme sem o campo title |
| 003 | 95% | CT_003 | - | Tentar criar um filme com pelo menos um campo em branco |
| 004 | 40% | CT_004 | - | Tentativa de chamada de filme inexistente |
| 005 | 60% | CT_005 | RF_002 | Tentativa de criação de filme com title já cadastrado |
| 006 | 94% | CT_006 | RF_003 | Tentativa de criação de filme com o ID informado no PUT |
| 007 | 97% | CT_007 | RF_004 | Tentativa de cadastro de filme com title já cadastrado utilizando PUT |
| 008 | 96% | CT_008 | - | Tentativa de cadastro de filme com retorno de status code 201 |
| 009 | 93% | CT_009 | - | Tentativa de exclusão de filme com retorno de status code 201 |
| 010 | 92% | CT_010 | - | Tentativa de atualização de filme com retorno de status code 201 |
| 011 | 91% | CT_011 | RF_005 | Tentativa de criação de filme com data inexistente |

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
| RF_006 | Não deverá ser possível fazer ações e chamadas para tickets inexistentes |
| RF_007 | Não deve ser possível criar um ticket com data fora do horário do filme |
| RF_008 | Caso não seja encontrado ticket com o ID informado no PUT, um novo ticket deverá ser criado |
| RF_009 | Não deve ser possível cadastrar ticket com o seatNumber já utilizado no mesmo filme |
| RF_010 | Não deverá ser possível cadastrar tickets repetidos |

## Caso de Teste
| Código | Prioridade | Caso de Teste | Requisito Funcional | Descrição |
| :-: | :-: | :-: | :-: | :- |
| 012 | 100% | CT_012 | - | Criar um ticket com sucesso |
| 013 | 90% | CT_013 | - | Tentar criar um ticket sem o campo movieId |
| 014 | 95% | CT_014 | - | Tentar criar um ticket com pelo menos um campo em branco |
| 015 | 40% | CT_015 | RF_006 | Tentativa de chamada de ticket inexistente |
| 016 | 60% | CT_016 | RF_007 | Tentativa de criação de ticket com data fora do horário |
| 017 | 94% | CT_017 | RF_008 | Tentativa de criação de ticket com o ID informado no PUT |
| 018 | 97% | CT_018 | RF_009 | Tentativa de cadastro de ticket com seatNumber já cadastrado no mesmo horário |
| 019 | 96% | CT_019 | RF_010 | Tentativa de cadastro de filme com retorno de status code 201 |
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

## Testes Exploratórios
| Código | movieId | seatNumber |
| :-: | :-: | :-: |
| TE01 | Vazio | Vazio |
| TE02 | Existente | Vazio |
| TE03 | Vazio | 10 |
| TE04 | Inexistente | 5 |
| TE05 | Existente | -1 |

# Testes de Performance
As rotas testadas serão /movies e /tickets, cobrindo os VERBO GET, POST, DELETE e PUT.

## Volumetria
Quantidade máxima: 1000 usuários.
> OBS: Devido às limitações de hardware, foi testado 10 usuários para as requisições.

## Métricas
- Asserção de Duração: 2000ms.
- Reqs.
- FailRate.
- SuccessRate.

## Casos de Teste de Performance

| Código | Caso de Teste | Requisição | Quantidade de Usuários |
| :-: | :-: | :-: | :-: |
| CTP001 | Listar movies | GET | 10 |
| CTP002 | Cadastro de movie | POST | 1 |
| CTP003 | Buscar movie | GET | 10 |
| CTP004 | Excluir movie | DELETE | 1 |
| CTP005 | Editar movie | PUT | 1 |
| CTPOO6 | Criando, logando e excluindo ticket | POST e DELETE | 1 |

