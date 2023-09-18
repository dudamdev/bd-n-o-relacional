PROJETO BACK-END
================

# Para iniciar o projeto

`npx @aka-demy/create-express-app`

* Name: back-end
* Language: JavaScript
* Template engine: None
* Package manager: npm

## Mudando para a pasta do projeto

`cd back-end`

## Atualizando pacotes vulneráveis com atualizações de segurança

`npm audit fix --force`

## Instalando o prisma como dependência de desenvolvimento

`npm install prisma --save-dev`

## Iniciando o Prisma com conector para MongoDB

`npx prisma init --datasource-provider mongodb`

* Instale a extensão Prisma no VSCode

## Adicionando o Prisma Client ao projeto

`npm install @prisma/client`

## Gerando o cliente do Prisma

`npx prisma generate`

* Precisa ser executado **toda vez** que o arquivo `schema.prisma` for alterado

## Exibindo os dados cadastrados com o Prisma Studio
`npx prisma studio`

Deve ser executado em um segundo terminal, enquanto o projeto está sendo executado no primeiro.

## Criando um novo crud a partir de outro já existente

### _Controller_
1. Copie o arquivo do _controller_ e renomei-o de acordo com a nova entiade para a qual será feito o novo CRUD. 
2. Substitua (`Ctrl+H`) todas as ocorrências de `prisma.xxxx` por `prisma.yyyy`, onde `xxxx` é o nome da entidade antiga e `yyyy` é o nome da entidade nova.
3. Verifique, no método `retrieveAll()` do _controller_, se há campos sendo usados no _orderBy_ e substitua-os conforme a nova entidade.

### _Route_
1. Copie o arquivo do _route_ (`Ctrl+C Ctrl+V`)e renomei-o de acordo com a nova entidade para a qual esta sendo feito o CRUD.
2. Na linha de `import` do _controller_, substitua o nome da entidade antiga pelo nome da entidade nova.

### Arquivo `app.js`
1. Na parte inferior do arquivo, na seção de rotas, copie e cole as duas linhas correspondentes a uma rota já existente e faça as substituições necessárias.