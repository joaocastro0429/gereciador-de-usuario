# 🧑‍💼 Gerenciador de Usuário - NestJS

Este projeto é uma API RESTful criada com **NestJS** para o gerenciamento de usuários. O sistema permite realizar operações CRUD, além de autenticação com JWT, usando banco de dados **PostgreSQL** com **Docker**.

---

## 📌 Funcionalidades

- Cadastro de usuários
- Listagem de todos os usuários
- Atualização de informações
- Exclusão de usuário
- Autenticação com e-mail e senha
- Geração e verificação de token JWT
- Rota privada 

---

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT - JSON Web Token](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Docker](https://www.docker.com/)

---

## 📦 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/joaocastro0429/gereciador-de-usuario.git
cd gereciador-de-usuario

4. Instale as dependências

npm install

5. Execute as migrações

npx prisma migrate dev

6. Rode a aplicação

npm run dev 
