# Projeto de Automação de Compra em Loja Online com Cypress

Este é um projeto de **automação de testes** para um fluxo de compra em uma loja online, utilizando **Cypress.io**. O objetivo é garantir que funcionalidades essenciais, como login, navegação, adição de produtos ao carrinho e finalização da compra, estejam funcionando corretamente.

## 📌 Funcionalidades Testadas

- **Login do usuário**: Validação do fluxo de autenticação.
- **Navegação pela loja**: Verificação da listagem de produtos.
- **Adição de produtos ao carrinho**: Confirmação de que os produtos são adicionados corretamente.
- **Finalização da compra**: Teste do processo de checkout até a confirmação do pedido.

## 🛠️ Tecnologias Utilizadas

- **Cypress** (para testes de UI automatizados)
- **Cucumber** (para escrita de testes em BDD)
- **Gherkin** (linguagem para descrever cenários de teste)
- **JavaScript** (linguagem de automação)

## 📌 Requisitos

- **Node.js** (>= v14.x.x)
- **Cypress** instalado via NPM

## 🚀 Instalação e Execução

1. **Clonar o repositório:**
```bash
git clone https://github.com/celiogouvea/QACypressEcomerce.git
cd seu-repositorio
```

2. **Instalar as dependências:**
```bash
npm install
```

3. **Executar os testes em modo gráfico:**
```bash
npx cypress open
```

4. **Executar os testes em modo headless (terminal):**
```bash
npx cypress run
```

## 📝 Estrutura do Projeto

```
📂 cypress
 ┣ 📂 e2e
 ┃ ┣ 📂 Cogin
 ┃ ┃ ┗ 📜 Login.js
 ┃ ┣ 📂 Compra
 ┃ ┃ ┗ 📜 Compra.cy.js
 ┃ ┗ 📂 AddCarrinho
 ┃ ┃ ┗ 📜 AddCarrinho.js
 ┃ ┗ AddCarrinho.feature
 ┃ ┗ Compra.feature
 ┃ ┗ Login.feature
 ┣ 📂 support
 ┃ ┗ 📜 commands.js
 ┗ 📜 cypress.config.js
```

## 📌 Exemplo de Teste em Gherkin

```gherkin
    Feature: Login

    Scenario: Login
    Given que o usuário está na página de login
    When o usuário insere um email válido
    Then o sistema deve redirecionar o usuário para a página inicial
```
