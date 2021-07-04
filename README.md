# Description
This project is a test for be BackEnd developer at InfoSistemas and consist in crud of cars.

### Stack
- Node 16.3.0
- NestJs
- OpenApi
- Jest
- Typescript

# Clone

```bash
# Clone github project
$ git clone https://github.com/heitor582/infoSistemasTest.git

# Enter the folder
$ cd ./infoSistemasTest
```
# Instalation
## Running the app with docker
```bash
# Install the dependencies
$ npm i

# Iniciate the docker
$ docker-compose up --build
```

## Running the app without Docker
### Configuration

Open .env.example file and rename for .env

Same in the print below but replacing fields with your connection of postgres

![image](https://user-images.githubusercontent.com/58075535/124395440-8fe40a00-dcda-11eb-9d77-e527e05eef5d.png)

### Start the app
```bash
# Install the dependencies
$ npm install

# Development
$ npm run start

# Watch mode
$ npm run start:dev
```
# Unit Test

```bash
# Unit tests
$ npm run test

# Test coverage
$ npm run test:cov
```
# Executing OpenApi/Swagger
 In the url after run the program access for enter in the swagger and see all the routes with the respectives parameters.
 ```bash
 http://localhost:3000/api/v1
```
![image](https://user-images.githubusercontent.com/58075535/124395497-cde12e00-dcda-11eb-842b-9213a008bc73.png)


# Import archive of Postman
  ### First what is it Postman?
  Postman is a program to make, organize and view the result of api requests.
  ### Running the app 
At the root of the project is a json that contains data that the postman program processes and transforms into pre-made requests.

In the postman click import -> Upload Files

![image](https://user-images.githubusercontent.com/58075535/124396541-92e1f900-dce0-11eb-9a0f-68eed8e69eb7.png)
![image](https://user-images.githubusercontent.com/58075535/124396554-9bd2ca80-dce0-11eb-9ceb-69372af6613f.png)


Import the json that is at the root of the project called 'InfoSistemas.postman_collection.json'

![image](https://user-images.githubusercontent.com/58075535/124396566-b1e08b00-dce0-11eb-943b-a6a7c3c9c818.png)

And click in Import button

![image](https://user-images.githubusercontent.com/58075535/124396573-bd33b680-dce0-11eb-917f-7f3e4a284972.png)

Now select the project at Postman and just do some requests clicking in the request and send

![image](https://user-images.githubusercontent.com/58075535/124396581-cb81d280-dce0-11eb-92d6-af710d1aa27e.png)

![image](https://user-images.githubusercontent.com/58075535/124396612-f2d89f80-dce0-11eb-93dc-ea98eae46526.png)


