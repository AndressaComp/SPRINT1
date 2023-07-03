# Planejamento de Testes
### **[API] Usuários**
Sendo um vendedor de uma loja.\
Gostaria de poder me cadastrar no Marketplace do ServeRest.\
Para poder realizar as vendas dos meus produtos.
- **DoR**
   - Banco de dados e infraestrutura para desenvolvimento disponibilizados;
   - Ambiente de testes disponibilizado.
- **DoD**
   - CRUD de cadastro de vendedores (usuários) implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
   - Análise de testes cobrindo todos verbos;
   - Matriz de rastreabilidade atualizada;
   - Automação de testes baseado na análise realizada;
- **Acceptance Criteria**
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
**Cenário de teste:** Cadastro de vendedor bem-sucedido
**Testes a realizar:** Verificar se um vendedor pode se cadastrar com sucesso no Marketplace do ServeRest.

Exemplo de teste OK:
1.	Dado que estou na página de cadastro de vendedor
2.	Quando preencho todos os campos obrigatórios corretamente (nome, e-mail, senha)
3.	E clico no botão de cadastro
4.	Então o sistema registra o vendedor com sucesso
5.	E o vendedor pode acessar sua conta após o cadastro

Exemplo de teste erro:
1.	Dado que estou na página de cadastro de vendedor
2.	Quando deixo um ou mais campos obrigatórios em branco
3.	E clico no botão de cadastro
4.	Então o sistema exibe uma mensagem de erro indicando que os campos obrigatórios devem ser preenchidos.

Possíveis cenários:
- Cadastro de vendedor bem-sucedido
- Tentativa de cadastro com e-mail já utilizado
- Tentativa de cadastro com campos obrigatórios em branco
- Tentativa de cadastro com e-mail inválido
- Tentativa de cadastro com senha com menos de 5 caracteres
- Tentativa de cadastro com senha com mais de 10 caracteres
- Tentativa de cadastro de usuário inexistente
- Atualização dos dados de um vendedor cadastrado
- Listagem de todos os vendedores cadastrados
- Exclusão de um vendedor cadastrado
- Tentativa de cadastro com e-mail de provedor gmail ou hotmail


## Testes Candidatos à Automação
