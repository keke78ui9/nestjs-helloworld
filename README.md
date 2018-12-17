## Description
HelloWorld app by using [Nest](https://github.com/nestjs/nest) framework TypeScript. Project created by use nestjs/cli.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Run the app with Docker
[Install Docker client](https://www.docker.com/get-started), and make sure has docker account. Docker hub repository for this app is keke78ui9/nestjs-app
+ Run app with docker at your local.
+ Run app with docker to AWS.
+ Download and run this docker image from Docker Hub.

```bash
# cd to the root folder

# build docker image
$ docker build -t {docker user account}/nestjs-app

# create container based docker image
$ docker run -p 127.0.0.1:5055:8080 -d {docker user account}/nestjs-app

# copy nestjs-app container id
$ docker ps

# run container at current os
$ docker logs {container id}

# hit the browser url 127.0.0.1:5055
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

