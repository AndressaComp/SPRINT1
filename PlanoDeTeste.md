# Planejamento de Testes
## Plano de Teste
1. Nome do Projeto\
Adequação Funcional da rota de usuários da API ServRest.
2. Resumo\
Fazer o teste para confirmar se o fluxo do usuário está comprindo o seu propósito de forma correta.
3. Pessoas Envolvidas
Andressa
4. Funcionalidades ou Módulos a Serem Testados (nível/tipo)\
- Será feito o teste de Adequação Funcional para o fluxo da API de usuários, CRIAR, LISTAR, ALTERARe DELETAR (heuristica CRUD).
- Cobertura de VERBO GET, POST, DELETE e PUT.
- Cobertura de endpoint (casos onde tem apenas um verbo).
6. Local do Teste\
Postman.
7. Recursos Necessários\
Computador com o Postman instalado.
8. Critérios Usados\
- RF_001: Não deverá ser possível fazer ações e chamadas para usuários inexistentes.
- RF_002: Não deve ser possível criar um usuário com e-mail já utilizado.
- RF_003: Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado.
- RF_004: Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT.
- RF_005: Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail.
- RF_006: Os e-mails devem seguir um padrão válido de e-mail para o cadastro.
- RF_007: As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres.

9. Casos de Teste
- CT_001: Criar um usuário com sucesso.
- CT_002: Tentar criar um usuário sem nome.
- CT_003: Tentar criar um usuário sem senha.
- CT_004[RF_001]: Tentativa de chamada de usuário inexistente.
- CT_005[RF_002]: Tentativa de criação de usuário com e-mail já cadastrado.
- CT_006[RF_003]: Tentativa de criação de usuário com o ID informado no PUT.
- CT_007[RF_004]: Tentativa de cadastro de usuário com e-mail já utilizado utilizando PUT.
- CT_008[RF_005]: Tentativa de cadastro de usuário com e-mails de provedor gmail e hotmail.
- CT_009[RF_006]: Tentativa de cadastro de usuário com e-mails fora do padrão válido.
- CT_010[RF_007]: Tentativa de cadastro de usuário com senhas de no mínimo 5 caracteres.
- CT_011[RF_007]: Tentativa de cadastro de usuário com senhas de no máximo 11 caracteres.

## Resumo da Estratégia
Seguir os testes de acordo com o Cenários Macro na Suíte.

## Cenários Macro na Suíte
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
