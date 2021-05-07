# Seazone Code Challenge

Este repositório contém o código fonte do desafio de criar duas páginas de visualização e busca de imóveis cadastrados no sistema de gerenciamento de imóveis da Seazone. A estrutura do projeto está organizada em 5 pastas principais: `assets`: que contém ícones, imagens, métricas e estilos globais utilizados no projeto; `components`: que contém os componentes desenvolvidos; `dataset`: que contém um arquivo imoveis.json com os dados presentes nas telas; `pages`: que contém as páginas implementadas; `routes`: onde estão configuradas as rotas da aplicação. 

### Ambiente de desenvolvimento
Para testar a aplicação em ambiente de desenvolvimento é necessário ter algumas dependências previamente instaladas:

1. [node v12.20.2+] (https://nodejs.org/en/)
2. [yarn v1.17.3+] (https://classic.yarnpkg.com/en/docs/install/#debian-stable)

Uma vez que todas as dependências estejam instaladas corretamente é possível testar a aplicação.
Dentro da pasta `/frontend/` execute os comandos:

1. `yarn install` - Para instalar todos os pacotes/dependências do projeto
2. `yarn start` - Para inicializar a aplicação no `localhost:3000`

### Deploy
A aplicação pode ser facilmente testada em:

https://seazone.netlify.app
