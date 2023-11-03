# Desafio_Rencars


##Projeto Veículos API

Este projeto é uma resolução do desafio proposto pela Rentcars, o projeto é uma API para gerenciar informações de veículos.Ele fornece endpoints para criar, listar, atualizar e excluir veículos. A API foi construída usando [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) e [Sequelize] com um banco de dados MySQL.

## Requisitos
Antes de começar, você precisa ter os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (opcional, se você deseja executar o banco de dados em um contêiner)

## Stack
- Node.js
- Express
- Sequelize (ORM)
- MySQL
- Docker (opcional)
- Insomnia

As seguintes rotas estão disponíveis para a API:

GET http://localhost:8080/veiculos
GET http://localhost:8080/veiculos/id
POST http://localhost:8080/veiculos
PUT http://localhost:8080/veiculos/id
DELETE http://localhost:8080/veiculos/id

## Como Executar
Siga as etapas abaixo para configurar e executar o projeto:

1. Clone este repositório em sua máquina:
   ```sh
   git clone https://github.com/VairtlesNehisen/Desafio_Rencars.git

Navegue até a pasta do projeto:
cd veiculos-api

Instale as dependências:
npm install

Execute o projeto:
npm start

A API estará disponível em http://localhost:8080.

Nota: Se você preferir usar um banco de dados MySQL em um contêiner Docker, siga as instruções no Dockerfile e docker-compose.yml fornecidos.

Como Executar o Projeto com Docker (Opcional)
Este guia explicará como configurar e executar o projeto utilizando Docker. Certifique-se de ter o Docker instalado em sua máquina.

Configure o Contêiner do Banco de Dados
O projeto usa um banco de dados MySQL. Você pode configurar e executar o banco de dados em um contêiner Docker com o seguinte comando:

docker-compose up -d

Isso criará um contêiner Docker MySQL usando a configuração do arquivo docker-compose.yml. 

Instale as Dependências
Agora, instale as dependências do projeto:
npm install

Execute o Projeto
Após configurar o banco de dados e instalar as dependências:
npm start

Lembre-se de que o banco de dados em contêiner será acessado em localhost com as configurações padrão (username: root, senha: vazia 'não ha senha'). Inicia o contêiner antes de iniciar o projeto.

## Rotas
Listar todos os veículos
Método: GET
Rota: /veiculos

Obter um veículo pelo ID
Método: GET
Rota: /veiculos/:id

Criar um novo veículo
Método: POST
Rota: /veiculos
Exemplo de uso:
Nota: a estructura do objeto deve as seguintes caracteristicas:

{
 "id": "cd99557a-8750-463e-a3fa-7f7bd9ecf37a",
 "locadora": "Movida",
 "modelo": "Virtus",
 "marca": "Volkswagen",
 "ano": 2023,
 "motor": "1.0",
 "portas": 4,
 "cambio": "Automatico",
 "ar_condicionado": true,
 "updatedAt": "2023-10-23T14:37:35.917Z",
 "createdAt": "2023-10-23T14:37:35.917Z"
}

Atualizar um veículo pelo ID
Método: PUT
Rota: /veiculos/:id
Exemplo de uso:

{
  "locadora": "Movida Atualizada",
  "modelo": "Gol Novo",
  "ano": 2024
}

 Certifique-se de parar o contêiner quando não estiver mais usando o projeto:
 docker-compose down


Desenvolvido por: Vairtles Nehisen Liel Mounkassa
