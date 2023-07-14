# Planejamento de Testes
## 1. Nome do Projeto
Adequação Funcional da rota /usuarios, /login e /produtos da API ServRest.
## 2. Escopo
Cobrir toda a rota de /usuários, /login e /produtos da API ServRest.
## 3. Pessoas Envolvidas
Andressa Monteiro dos Santos.
## 4. Funcionalidades ou Módulos a Serem Testados
### **/usuarios** :frowning_person: :pouting_man:
- Fluxo da API de /usuarios, CRIAR, LISTAR, ALTERAR e DELETAR (heuristica CRUD).

### **/login**
- Autenticação com geração de token Bearer implementada.
- Cobertura de endpoint.

### **/produtos**
- Cobertura de VERBO GET, POST, DELETE e PUT.

## 5. Local do Teste
Postman.

## 8. Ferramentas
Postman e xmind.

## Resumo da Estratégia
Seguir os testes de acordo com o Cenários Macro na Suíte.

## Cenários Macro na Suíte
### **/usuarios**
**Possíveis cenários: Cadastrar**
- Cadastro de vendedor bem-sucedido
- Tentativa de cadastro com e-mail já utilizado
- Tentativa de criar um novo usuário ao não encontrar ID informado no PUT
- Tentativa de cadastro com campos obrigatórios em branco
- Tentativa de cadastro com e-mail inválido
- Tentativa de cadastro com senha com menos de 5 caracteres
- Tentativa de cadastro com senha com mais de 10 caracteres
- Tentativa de cadastro de usuário inexistente
- Tentativa de cadastro com e-mail de provedor gmail ou hotmail
- Tentativa de cadastro com e-mail fora do padrão

**Possíveis cenários: Chamadas**
- Listagem de todos os vendedores cadastrados
- Tentativa de ações e chamadas para usuários inexistentes

**Possíveis cenários: Atualização**
- Atualização dos dados de um vendedor cadastrado
- Atualização dos dados de um vendedor não cadastrado

**Possíveis cenários: Exclusão**
- Exclusão de um vendedor cadastrado
- Exclusão de um vendedor não cadastrado

### **/login**

### Critérios Usados
- RF_001: Não deverá ser possível fazer ações e chamadas para usuários inexistentes.
- RF_002: Não deve ser possível criar um usuário com e-mail já utilizado.
- RF_003: Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado.
- RF_004: Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT.
- RF_005: Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail.
- RF_006: Os e-mails devem seguir um padrão válido de e-mail para o cadastro.
- RF_007: As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres.

### Casos de Teste
- CT_001: Criar um usuário com sucesso.
- CT_002: Tentar criar um usuário sem o campo nome.
- CT_003: Tentar criar um usuário com pelo menos um campo em branco.
- CT_004[RF_001]: Tentativa de chamada de usuário inexistente.
- CT_005[RF_002]: Tentativa de criação de usuário com e-mail já cadastrado.
- CT_006[RF_003]: Tentativa de criação de usuário com o ID informado no PUT.
- CT_007[RF_004]: Tentativa de cadastro de usuário com e-mail já utilizado utilizando PUT.
- CT_008[RF_005]: Tentativa de cadastro de usuário com e-mails de provedor gmail e hotmail.
- CT_009[RF_006]: Tentativa de cadastro de usuário com e-mails fora do padrão válido.
- CT_010[RF_007]: Tentativa de cadastro de usuário com senhas menor que 4 caracteres.
- CT_011[RF_007]: Tentativa de cadastro de usuário com senha maior que 11 caracteres.

## Testes Candidatos à Automação
- CT_002: Tentar criar um usuário sem nome.
- CT_003: Tentar criar um usuário sem senha.
- CT_005[RF_002]: Tentativa de criação de usuário com e-mail já cadastrado.
- CT_006[RF_003]: Tentativa de criação de usuário com o ID informado no PUT.
- CT_007[RF_004]: Tentativa de cadastro de usuário com e-mail já utilizado utilizando PUT.
- CT_008[RF_005]: Tentativa de cadastro de usuário com e-mails de provedor gmail e hotmail.
- CT_009[RF_006]: Tentativa de cadastro de usuário com e-mails fora do padrão válido.
- CT_010[RF_007]: Tentativa de cadastro de usuário com senhas de no mínimo 5 caracteres.
- CT_011[RF_007]: Tentativa de cadastro de usuário com senhas de no máximo 11 caracteres.
