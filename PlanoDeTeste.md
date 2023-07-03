# Planejamento de Testes
**[API] Usuários**

Sendo um vendedor de uma loja
Gostaria de poder me cadastrar no Marketplace do ServeRest
Para poder realizar as vendas dos meus produtos.
- DoR
   - Banco de dados e infraestrutura para desenvolvimento disponibilizados;
   - Ambiente de testes disponibilizado.
- DoD
   - CRUD de cadastro de vendedores (usuários) implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
   - Análise de testes cobrindo todos verbos;
   - Matriz de rastreabilidade atualizada;
   - Automação de testes baseado na análise realizada;
- Acceptance Criteria
   - Os vendedores (usuários) deverão possuir os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR;
   - Não deverá ser possível fazer ações e chamadas para usuários inexistentes;
   - Não deve ser possível criar um usuário com e-mail já utilizado;
   - Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado;
   - Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT;
   - Os testes executados deverão conter evidências;
   - Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail;
   - Os e-mails devem seguir um padrão válido de e-mail para o cadastro;
   - As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres;
   - A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## Resumo da Estratégia
## Cenários Macro na Suíte
## Testes Candidatos à Automação
