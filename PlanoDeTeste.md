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
- RF_001: Não deverá ser possível fazer ações e chamadas para usuários inexistentes;
- RF_002: Não deve ser possível criar um usuário com e-mail já utilizado;
- RF_003: Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado;
- RF_004: Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT;
- RF_005: Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail;
- RF_006: Os e-mails devem seguir um padrão válido de e-mail para o cadastro;
- RF_007: As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres.

9. Casos de Teste
- Falta de conexão com a internet via rede wifi.
   - Usar uma conexão via rede celular.
- Perda do banco de dados.
9. Como o Resultado do Teste Serão Diivulgados\
Será gerado outro documento.\
Relatório dos resultados dos testes.\
Relatório de defeitos.
10. Cronograma\
Data de início e final das atividades feitas no teste.

## Resumo da Estratégia


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
- Usuário efetua login:
   - Usuário efetua login no sistema com sucesso: usuário é redirecionado para a página principal.
   - Usuário efetua login no sistema com falha: recebe mensagem indicando erro na autenticação e local do erro.
- Autenticação do usuário com a proxy
- Carrinho:
   - Concluir compra.

