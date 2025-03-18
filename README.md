# Meu Projeto Node.js com Docker

Este é um projeto de API Node.js que utiliza Docker para containerização e Jest para testes automatizados. A aplicação permite cadastrar usuários em um banco de dados MySQL e inclui um pipeline de CI/CD configurado com GitHub Actions.

## Funcionalidades

- Cadastro de usuários com nome e e-mail.
- Conexão com banco de dados MySQL.
- Testes automatizados com Jest.
- Pipeline de CI/CD com GitHub Actions.

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Docker e Docker Compose instalados.
- Node.js (opcional, caso queira rodar fora do Docker).

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/Lucas-Sana/meu-projeto-node.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd meu-projeto-node
   ```
3. Construa as imagens Docker e inicie os contêineres:
   ```bash
   docker-compose up --build
   ```
4. Acesse a aplicação no navegador:
   ```
   http://localhost:4000
   ```
5. Para parar os contêineres, use:
   ```bash
   docker-compose down
   ```

## Comandos Úteis

### Rodar testes:
```bash
docker-compose run test
```

### Acessar o banco de dados MySQL:
```bash
docker exec -it mysql_db bash
mysql -u meu_usuario -pminha_senha
```

### Ver logs da aplicação:
```bash
docker logs node_app
```

## Pipeline de CI/CD

O projeto utiliza GitHub Actions para CI/CD. O pipeline inclui:

- **Build**: Compila o projeto usando Webpack.
- **Testes**: Executa os testes automatizados com Jest.
- **Deploy**: Implementa a aplicação em um ambiente de produção. 

O pipeline é executado automaticamente em pushes para a branch `main` e em pull requests.

## Como o Projeto Foi Desenvolvido

### Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criar a API.
- **MySQL**: Banco de dados relacional.
- **Docker**: Containerização da aplicação e do banco de dados.
- **Jest**: Framework para testes automatizados.
- **GitHub Actions**: Automação de CI/CD.


