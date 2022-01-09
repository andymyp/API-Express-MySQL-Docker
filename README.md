# Node Js Backend with MySQL, Sequelize, and Docker

This project uses:

- Node Js
- Express
- MySQL
- Sequelize

## Installation

```bash
git clone https://github.com/andymyp/API-Express-MySQL-Docker.git
```

```bash
cd API-Express-MySQL-Docker
```

```bash
npm install
```

#### Import `database > todo4.sql` to your phpmyadmin

### Build docker image

```bash
docker build . -t your-docker-user/api-express-mysql-docker
```

### Run

```bash
docker run -e MYSQL_HOST=localhost -e MYSQL_USER=root -e MYSQL_PASSWORD= -e MYSQL_DBNAME=todo4 -p 3030:3030 your-docker-user/api-express-mysql-docker
```
