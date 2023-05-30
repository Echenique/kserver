# Deps:

- Docker [https://docs.docker.com/desktop/install/]
- NodeJS [https://nodejs.org/en/download]

# Pré running

to config MySQL with docker run command in terminal:
`docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=pass321 -d mysql`

Access mysql terminal and create a new table:
`CREATE DATABASE 'testedb'`

install modules with:
`npm i`

and build front with:
`npm run build`

and run server with:
`npm run start`