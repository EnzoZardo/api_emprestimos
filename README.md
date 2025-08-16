# 📌 API de Empréstimos

API desenvolvida para a disciplina **Desenvolvimento de Sistemas Web** no curso de **Análise e Desenvolvimento de Sistemas (ADS)**.  
O sistema simula operações de empréstimos para clientes, incluindo cadastro, consulta e exclusão de registros.  
Utiliza **Node.js**, **Express** e **MongoDB**.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Express Validator](https://express-validator.github.io/docs/)

---

## 📂 Estrutura do projeto

src/

├── app.ts # Arquivo principal da aplicação

├── routes/ # Definição das rotas da API

├── models/ # Modelos Mongoose

├── controllers/ # Lógica de cada rota

└── config/ # Configurações (ex.: conexão MongoDB, rotas, app, etc.)

> Após build, os arquivos compilados são gerados em `lib/`.

---

## 📦 Instalação

1. **Clone o repositório**
   git clone https://github.com/EnzoZardo/api_emprestimos.git
   cd api_emprestimos
Instale as dependências


npm install
Configure as variáveis de ambiente
Crie um arquivo .env na raiz com:

npm start
Compilar para dev

npm run build
🔌 Rotas da API


| Método | Endpoint | Descrição |
|--------|---------|-----------|
| POST   | /creditos | Busca os créditos disponíveis para um cliente e cadastra ele |
| DELETE | /emprestimos/:id | Remove um empréstimo pelo ID |
| GET    | /emprestimos/:cpf | Cria um empréstimo para um cliente pelo CPF |
| GET    | /emprestimos | Lista todos os empréstimos |
| POST   | /emprestimos | Cria um novo empréstimo |
| GET    | /clientes | Lista todos os clientes |
| POST   | /clientes | Cadastra um novo cliente |
| GET    | /clientes/:cpf | Consulta um cliente pelo CPF |
| DELETE | /clientes/:cpf | Remove um cliente pelo CPF |
| GET    | /rotas | Lista todas as rotas disponíveis |

🛠 Scripts disponíveis
npm start – Executa a aplicação em modo desenvolvimento (com tsx watch).

npm run build – Compila o código TypeScript para JavaScript.

npm run lint – Verifica padrões de código com TSLint.

---
