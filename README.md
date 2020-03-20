#### Serasa Backend Node Test

Para atender melhor o desafio do Serasa, eu subi uma API em NodeJS para realizar o cadastro de usuários utilizando validações solicitadas por eles e integrei os erros diretamente no Front-end.

Pra ficar mais dinâmico eu subi o backend no Heoroku e utilizei uma integração de postgres e sequelize diretamente na cli do Heroku.

Ficaram disponíveis duas rotas POSTS, session responsável por verificar o login e a user cadastrar efetivamente e gerar o token de autenticação do usuário.

https://serasa-backend-test.herokuapp.com/session
https://serasa-backend-test.herokuapp.com/user

### Instruções:

`git clone https://github.com/brunoscardoso/serasa-backend-test`

`serasa-backend-test`

`yarn install`

Para rodar local é necessário configurar as váriaveis do arquivo .env.example e renomear o arquivo para apenas .env

Depois que terminar a instalação é só rodar um dos comandos abaixo (necessário ter ambiente de desenvolvimento configurado):

yarn start

Print do Insominia realizando cadastro: 
![signup](https://user-images.githubusercontent.com/47576846/77204046-ac056d00-6ad0-11ea-888c-2b803cb0e306.png)
