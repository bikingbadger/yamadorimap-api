# Yamadori

## Create database

### Mongo User

The user name and password should be the same as the settings in the `.env` file that you create next

```mongodb
use yamadb-test

db.createUser(
{	user: "yamatest",
	pwd: "yama123",
	roles:[{role: "readWrite" , db:"yamadb-test"}]
});
```

### `.env` File

The details used to create the user above should be used in the environment variables

```bash
DB_USER=yamaadmin
DB_PASSWORD=yama123
DB_HOST=localhost
DB_LOCAL_PORT=27017
DB_NAME=yamadb
```






!!!!! NEED TO GET DOCKER COMPOSE WORKING!  !!!!!
## Setup Development Environment

### Create Docker Container

```bash
cd yamadori-api
docker-compose up --build -d mongodb
```
### Rebuild Image

```bash
docker-compose up --build
```
## Local Development

```bash
yarn
yarn server
```
