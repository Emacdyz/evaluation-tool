# Evaluation Tool Server

This is a server for a student evaluation tools. It is composed of 5 tables with the following endpoints: 

It has these endpoints:

1 - Batches:

* `GET /batches`: list all batches
* `GET /batches/:id`: select batch by id
* `POST /batches`: create new batch

2 - Students:

* `GET /students`: list all students
* `GET /students/:id`: select student by id
* `POST /students`: add new students
* `PATCH /students/:id`: update an existing student
* `DELETE /students/:id`: delete existing student

3 - Evaluation:

* `GET /evaluation`: list all evaluation
* `GET /evaluation/:id`: select evaluation by id
* `POST /evaluation`: create new evaluation
* `PATCH /evaluation/:id`: update an existing evaluation

4/5 - Users + Logins: 

* `GET /users`: list all users
* `GET /users/:id`: select user by id for log in 
* `POST /users`: create new user for sign up


## Running

* You need a working Postgres database that is preferrably empty (drop all the tables) and running 
* Install the dependencies using `yarn install`
* Compile the app (Typescript > Javascript) using `yarn compile` (during development you can use `yarn watch`)
* `yarn start`

You can run the tests with `yarn test`. Currently they only cover the game logic. 
