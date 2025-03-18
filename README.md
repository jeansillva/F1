
# Desenvolvimento de uma Aplicação SPA com React

##  Objetivo

Desenvolver uma aplicação web de página única (SPA) utilizando React. 

## Integrantes:

-   Jean Carlos Oliveira da Silva
-   Renato Cabral Rodrigues de Souza

##  Requisitos do Projeto

### 1- Tema da Aplicação: Fórmula 1

### 2-  Número de Páginas: A aplicação conta com 4 páginas.

### 3- Gerenciamento de Estado
-   O usuário pode votar na sua equipe favorita.
-   Utiliza React Context para gerenciar o estado global da equipe favorita do usuário.
-   Disponibiliza o estado `favoriteTeam` e a função `setFavoriteTeam`.
-   O estado da equipe favorita está sempre presente no Header.

### 4- Consultas a APIs Externas

-   A API externa utilizada é a [OpenF1](https://openf1.org/).
-   Endpoint consumido: `https://api.openf1.org/v1/drivers`.
-   A página de pilotos exibe 10 pilotos por interação do usuário com um botão.
-   O limite é de 60 pilotos devido a repetições na API.

### 5- Roteamento

-   Utiliza React Router para gerenciar a navegação entre as páginas.
-   A navegação pode ser feita pelo Header.

### 6- Hooks Customizados

-   useFetch: Responsável por realizar requisições HTTP.
-   useLoading: Gerencia o estado de carregamento.

##  Como Rodar a Aplicação

###  Clonar o Repositório

```sh
 git clone https://github.com/jeansillva/F1
```
###  Instalar as Dependências

```sh
npm i
```

### Executar a Aplicação

```sh
npm run dev
```

### Acessar no Navegador

[http://localhost:5173/](http://localhost:5173/)
