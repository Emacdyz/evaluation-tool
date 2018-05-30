

# Student Evaluation Tool Front-End

> Final Assignment for Codaisseur Academy 

The goal was to build an evaluation platform that could be used by Codaisseur's teacher to evaluate their students with a color code. The app allows teachers to add class by number, students, and evaluation per student. 

There is also an algorythm that would fetch a student to ask a question to, students with the lowest scores would get questions more often.

### 🔷 In Progress!

## Client

It's build using `create-react-app`. You first need to `yarn` in order to get all the dependencies locally. To start the app `yarn start` can be used.

The backend (server) of this project must be running for the app to function correctly.

## Server

The server side is composed of 5 tables with the following endpoints:

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

### Running

You need a working Postgres database that is preferrably empty (drop all the tables) and running
Install the dependencies using `yarn` in your terminal.

Compile the app (Typescript > Javascript) using `yarn compile` or `tsc -w` on a seperate terminal window. To create the tables on your database, you will need to type `node .` or `nodemon`, in a seperate window, while the other one is still running. 


