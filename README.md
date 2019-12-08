## MEAN TODO List with docker
TODO List using latest version of MEAN stack and docker containers.

## Set up

Make sure you have `docker` and `docker-compose` installed.

`docker` should be version 19 or higher.

`docker-compose` should be version 1.24 or higher.

### Clone the repo
```bash
$ git clone https://github.com/rafaelbenetti/mean-todo-list
```
### Run docker
```bash
$ docker-compose up
```

 App should be running in `localhost:4200`

### Run API tests
```bash
$ docker exec -it mean-todo-list_express_1 bash
$ npm test
```

### Run Angular tests
```bash
$ docker exec -it mean-todo-list_angular_1 bash
$ npm test
```