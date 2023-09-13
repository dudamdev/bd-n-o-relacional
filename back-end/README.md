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
