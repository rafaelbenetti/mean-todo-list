## MEAN TODO List with docker
TODO list using latest version of MEAN stack using docker containers.

## Set up

Make sure you have docker and docker-compose installed.

Docker should be version 19 or higher.
Docker-compose should be version 1.24 or higher.

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