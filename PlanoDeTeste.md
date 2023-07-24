# Planejamento de Testes
## 1. Nome do Projeto
Adequação Funcional da rota /usuarios, /login e /produtos da API ServRest.
## 2. Escopo
Cobrir toda a rota de /usuários, /login e /produtos da API ServRest.
## 3. Pessoas Envolvidas
Andressa Monteiro dos Santos.
## 4. Funcionalidades ou Módulos a Serem Testados
### **/usuarios** :pouting_man:
- Fluxo da API de /usuarios, CRIAR, LISTAR, ALTERAR e DELETAR (heuristica CRUD).

### **/login** :pouting_man::key:
- Autenticação com geração de token Bearer implementada.
- Cobertura de endpoint.

### **/produtos** :shopping:
- Cobertura de VERBO GET, POST, DELETE e PUT.

## 5. Local do Teste
Postman.

## 8. Ferramentas
Postman e xmind.

# Resumo da Estratégia
Seguir os testes de acordo com o Cenários Macro na Suíte.

# **/usuarios** :pouting_man:
## Cenários Macro na Suíte
- **Possíveis cenários: Cadastrar**
   - Cadastro de vendedor bem-sucedido.
   - Tentativa de cadastro com e-mail já utilizado.
   - Tentativa de criar um novo usuário ao não encontrar ID informado no PUT.
   - Tentativa de cadastro com campos obrigatórios em branco.
   - Tentativa de cadastro com e-mail inválido.
   - Tentativa de cadastro com senha com menos de 5 caracteres.
   - Tentativa de cadastro com senha com mais de 10 caracteres.
   - Tentativa de cadastro de usuário inexistente.
   - Tentativa de cadastro com e-mail de provedor gmail ou hotmail.
   - Tentativa de cadastro com e-mail fora do padrão.

- **Possíveis cenários: Chamadas**
   - Listagem de todos os vendedores cadastrados.
   - Tentativa de ações e chamadas para usuários inexistentes.

- **Possíveis cenários: Atualização**
   - Atualização dos dados de um vendedor cadastrado.
   - Atualização dos dados de um vendedor não cadastrado.

- **Possíveis cenários: Exclusão**
   - Exclusão de um vendedor cadastrado.
   - Exclusão de um vendedor não cadastrado.

## Critérios Usados
| Requisito Funcional | Descrição |
| :-: | :- |
| RF_001 | Não deverá ser possível fazer ações e chamadas para usuários inexistentes |
| RF_002 | Não deve ser possível criar um usuário com e-mail já utilizado |
| RF_003 | Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado |
| RF_004 | Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT |
| RF_005 | Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail |
| RF_006 | Os e-mails devem seguir um padrão válido de e-mail para o cadastro |
| RF_007 | As senhas devem possuir no mínimo 5 caracteres e no máximo 10 caracteres |

## Caso de Teste
| Código | Prioridade | Caso de Teste | Requisito Funcional | Descrição |
| :-: | :-: | :-: | :-: | :- |
| 001 | 100% | CT_001 | - | Criar um usuário com sucesso |
| 002 | 90% | CT_002 | - | Tentar criar um usuário sem o campo nome |
| 003 | 95% | CT_003 | - | Tentar criar um usuário com pelo menos um campo em branco |
| 004 | 40% | CT_004 | RF_001 | Tentativa de chamada de usuário inexistente |
| 005 | 60% | CT_005 | RF_002 | Tentativa de criação de usuário com e-mail já cadastrado |
| 006 | 94% | CT_006 | RF_003 | Tentativa de criação de usuário com o ID informado no PUT |
| 007 | 97% | CT_007 | RF_004 | Tentativa de cadastro de usuário com e-mail já cadastrado utilizando PUT |
| 008 | 96% | CT_008 | RF_005 | Tentativa de cadastro de usuário com e-mails de provedor gmail e hotmail |
| 009 | 93% | CT_009 | RF_006 | Tentativa de cadastro de usuário com e-mails fora do padrão válido |
| 010 | 92% | CT_010 | RF_007 | Tentativa de cadastro de usuário com senhas menor que 4 caracteres |
| 011 | 91% | CT_011 | RF_007 | Tentativa de cadastro de usuário com senha maior que 11 caracteres |

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

---
# **/login** :pouting_man::key:
## Cenários Macro na Suíte
- **Possíveis cenários: Login**

   - Login bem sucedido.
   - Tentativa de login com algum campo em branco.
   - Tentativa de login com usuário inexistente.

## Critérios Usados
| Requisito Funcional | Descrição |
| :-: | :- |
| RF_008 | Usuários não cadastrados não deverão conseguir autenticar |
| RF_009 | Usuários com senha inválida não deverão conseguir autenticar |
| RF_010 | No caso de não autenticação, deverá ser retornado um status code 401 (Unauthorized) |
| RF_011 | Usuários existentes e com a senha correta deverão ser autenticados |
| RF_012 | A autenticação deverá gerar um token Bearer |
| RF_013 | A duração da validade do token deverá ser de 10 minutos |

## Caso de Teste
| Código | Prioridade | Caso de Teste | Requisito Funcional | Descrição |
| :-: | :-: | :-: | :-: | :- |
| 012 | 100% | CT_012 | - | Login feito com sucesso |
| 013 | 90% | CT_013 | - | Tentar logar um usuário sem o campo email |
| 014 | 95% | CT_014 | - | Tentar logar um usuário com pelo menos um campo em branco |
| 015 | 80% | CT_015 | RF_008 | Tentativa de login com usuário não cadastrado |
| 016 | 70% | CT_016 | RF_009 | Tentativa de login com senha inválida |

## Testes Candidatos à Automação
| Código | Caso de Teste |
| :-: | :-: |
| 013 | CT_013 |
| 014 | CT_014 |
| 015 | CT_015 |
| 016 | CT_016 |

# **/produtos** :shopping:
## Cenários Macro na Suíte
- **Possíveis cenários: Cadastrar**
   - Cadastro de produto bem sucedido.
   - Tentativa de cadastro com produto existente.
   - Tentativa de cadastrar um novo produto ao não encontrar ID informado no UPDATE.
   - Tentativa de cadastrar um novo produto através do PUT.
   - Tentativa de cadastro com campos obrigatórios em branco.

- **Possíveis cenários: Chamadas**
   - Listagem de todos os produtos cadastrados.
   - Tentativa de ações e chamadas para produtos inexistentes.

- **Possíveis cenários: Atualização**
   - Atualização dos dados de um produto cadastrado.
   - Atualização dos dados de um produto não cadastrado.

- **Possíveis cenários: Exclusão**
   - Exclusão de um produto cadastrado.
   - Exclusão de um produto não cadastrado.

## Critérios Usados
| Requisito Funcional | Descrição |
| :-: | :- |
| RF_014 | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos |
| RF_015 | Não deve ser possível realizar o cadastro de produtos com nomes já utilizados |
| RF_016 | Não deve ser possível excluir produtos que estão dentro de carrinhos (dependência API Carrinhos) |
| RF_017 | Caso não exista produto com o ID informado na hora do UPDATE, um novo produto deverá ser criado |
| RF_018 | Produtos criados através do PUT não poderão ter nomes previamente cadastrados |

## Caso de Teste
| Código | Prioridade | Caso de Teste | Requisito Funcional | Descrição |
| :-: | :-: | :-: | :-: | :- |
| 017 | 100% | CT_017 | - | Criar um produto com sucesso |
| 018 | 94% | CT_018 | - | Tentar criar um produto sem o campo nome |
| 019 | 85% | CT_019 | RF_014 | Tentativa de ação na rota produto sem autenticação |
| 020 | 80% | CT_020 | RF_015 | Tentativa de criação de produto com nome já utilizado |
| 021 | 95% | CT_021 | RF_017 | Tentativa de criação de produto com ID não cadastrado utilizando UPDATE |
| 022 | 70% | CT_022 | RF_018 | Tentativa de cadastro de produto com ID não cadastrado, mas com nome cadastrado |
| 023 | 93% | CT_023 | - | Tentar criar um produto com o campo nome em branco |
| 024 | 89% | CT_024 | - | Tentar criar um produto com o campo preço igual a 0 |
| 025 | 92% | CT_025 | - | Tentar criar um produto com o campo descrição em branco |
| 026 | 91% | CT_026 | - | Tentar criar um produto com o campo quantidade igual a 0 |

## Testes Candidatos à Automação
| Código | Caso de Teste |
| :-: | :-: |
| 018 | CT_018 |
| 019 | CT_019 |
| 020 | CT_020 |
| 021 | CT_021 |
| 022 | CT_022 |
| 023 | CT_023 |
| 024 | CT_024 |
| 025 | CT_025 |
| 026 | CT_026 |

---
# **/carrinho** :shopping_cart:
## Cenários Macro na Suíte
- **Possíveis cenários: Cadastrar**
   - Cadastro de carrinho bem sucedido.
   - Tentativa de cadastro com carrinho existente.
   - Tentativa de cadastrar um novo carrinho ao não encontrar ID informado no PUT.
   - Tentativa de cadastro com campos obrigatórios em branco.

- **Possíveis cenários: Chamadas**
   - Listagem de todos os carrinhos cadastrados.
   - Tentativa de ações e chamadas para carrinhos inexistentes.

- **Possíveis cenários: Atualização**
   - Atualização dos dados de um carrinho cadastrado.
   - Atualização dos dados de um carrinho não cadastrado.

- **Possíveis cenários: Exclusão**
   - Exclusão de um carrinho cadastrado.
   - Exclusão de um carrinho não cadastrado.

## Critérios Usados
| Requisito Funcional | Descrição |
| :-: | :- |
| RF_019 | Os carrinhos retornados são únicos por usuário |
| RF_020 | O carrinho é vinculado ao usuário do token enviado, sendo possível cadastrar apenas 1 carrinho por usuário |
| RF_021 | Ao cadastrar carrinho com sucesso é feita a redução da quantidade no cadastro de cada produto inserido no carrinho |
| RF_022 | Ao concluir uma compra o carrinho é excluído |
| RF_023 | Ao cancelar uma compra o carrinho é excluído e o estoque dos produtos desse carrinho é reabastecido |

## Caso de Teste
| Código | Prioridade | Caso de Teste | Requisito Funcional | Descrição |
| :-: | :-: | :-: | :-: | :- |
| 027 | 100% | CT_027 | - | Criar um carrinho com sucesso |
| 028 | 94% | CT_028 | - | Tentar criar um carrinho sem o campo idProduto |
| 029 | 85% | CT_029 | RF_014 | Tentativa de ação na rota carrinho sem autenticação |
| 030 | 80% | CT_030 | RF_015 | Tentativa de criação de produto com nome já utilizado |
| 021 | 95% | CT_021 | RF_017 | Tentativa de criação de produto com ID não cadastrado utilizando UPDATE |
| 022 | 70% | CT_022 | RF_018 | Tentativa de cadastro de produto com ID não cadastrado, mas com nome cadastrado |
| 023 | 93% | CT_023 | - | Tentar criar um produto com o campo nome em branco |
| 024 | 89% | CT_024 | - | Tentar criar um produto com o campo preço igual a 0 |
| 025 | 92% | CT_025 | - | Tentar criar um produto com o campo descrição em branco |
| 026 | 91% | CT_026 | - | Tentar criar um produto com o campo quantidade igual a 0 |

## Testes Candidatos à Automação
| Código | Caso de Teste |
| :-: | :-: |
| 018 | CT_018 |
| 019 | CT_019 |
| 020 | CT_020 |
| 021 | CT_021 |
| 022 | CT_022 |
| 023 | CT_023 |
| 024 | CT_024 |
| 025 | CT_025 |
| 026 | CT_026 |
