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
- Postman.
- Xmind.
- Jira.
- k6.

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.postman.com/downloads/"><img src="https://github.com/AndressaComp/SPRINTs/blob/pb_sprint8/imagens/postman.png" width="100px;" alt="Postman"/><br /><sub><b>Postman</b></sub></a><br /><a href="https://github.com/ServeRest/ServeRest/commits?author=leandromuto" title="Documentation">📖</a> <a href="#infra-leandromuto" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fejsrodrigues"><img src="https://avatars3.githubusercontent.com/u/8000936?v=4?s=100" width="100px;" alt="Felipe Rodrigues"/><br /><sub><b>Felipe Rodrigues</b></sub></a><br /><a href="#infra-fejsrodrigues" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/doamaral"><img src="https://avatars0.githubusercontent.com/u/7451330?v=4?s=100" width="100px;" alt="Lucas Amaral"/><br /><sub><b>Lucas Amaral</b></sub></a><br /><a href="#talk-doamaral" title="Talks">📢</a> <a href="https://github.com/ServeRest/ServeRest/issues?q=author%3Adoamaral" title="Bug reports">🐛</a> <a href="https://github.com/ServeRest/ServeRest/commits?author=doamaral" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/ulucasfraga/"><img src="https://avatars2.githubusercontent.com/u/23031781?v=4?s=100" width="100px;" alt="lucas.fraga"/><br /><sub><b>lucas.fraga</b></sub></a><br /><a href="#ideas-uLucasFraga" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ServeRest/ServeRest/issues?q=author%3AuLucasFraga" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/bruno-batista-87734464/?locale=en_US"><img src="https://avatars3.githubusercontent.com/u/8673550?v=4?s=100" width="100px;" alt="bruno batista"/><br /><sub><b>bruno batista</b></sub></a><br /><a href="#ideas-brunobatista25" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/eliasreis54"><img src="https://avatars1.githubusercontent.com/u/29265526?v=4?s=100" width="100px;" alt="Elias Reis"/><br /><sub><b>Elias Reis</b></sub></a><br /><a href="#maintenance-eliasreis54" title="Maintenance">🚧</a> <a href="#infra-eliasreis54" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gabriel-pinheiro"><img src="https://avatars2.githubusercontent.com/u/56726395?v=4?s=100" width="100px;" alt="gabriel-pinheiro"/><br /><sub><b>gabriel-pinheiro</b></sub></a><br /><a href="https://github.com/ServeRest/ServeRest/commits?author=gabriel-pinheiro" title="Code">💻</a> <a href="#ideas-gabriel-pinheiro" title="Ideas, Planning, & Feedback">🤔</a></td>
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
| RF_001 | Não deverá ser possível fazer ações e chamadas para filmes inexistentes |
| RF_002 | Não deve ser possível criar um filme com title já utilizado |
| RF_003 | Caso não seja encontrado filme com o ID informado no PUT, um novo filme deverá ser criado |
| RF_004 | Não deve ser possível cadastrar filme com title já utilizado utilizando PUT |
| RF_005 | Não deverá ser possível cadastrar filmes com datas inexistentes |

## Caso de Teste
| Código | Prioridade | Caso de Teste | Requisito Funcional | Descrição |
| :-: | :-: | :-: | :-: | :- |
| 001 | 100% | CT_001 | - | Criar um filme com sucesso |
| 002 | 90% | CT_002 | - | Tentar criar um filme sem o campo title |
| 003 | 95% | CT_003 | - | Tentar criar um filme com pelo menos um campo em branco |
| 004 | 40% | CT_004 | RF_001 | Tentativa de chamada de filme inexistente |
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
| 022 | 91% | CT_022 | - | Tentativa de chamada de filme existente |

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

