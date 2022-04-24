# FederallProject

FederallProject is a solution for school/schedule management that provides the possibility of schedules by classes, There's 2 different roles in the application(Administrator,Teacher), the application is developed in Spring Boot/Java EE for the backend, Angular for the front end with the use of Keycloak 16 for user management and security

## Installation FrontEnd

Use the package manager [npm] to install all the dependencies.

```bash
npm install
```

## Installation BackEnd

Use the package manager [maven] to install all the dependencies.

```bash
mvn clean install
```


## How to start The application

### Keycloak
Open the keycloak/bin folder and launch the command below through the terminal

```bash
standalone.bat
```

### BackEnd
You need to start the backend application before starting to test the application


### FrontEnd
After installing all the dependencies open the project through the terminal and launch the command below for testing the application.

```bash
npm run start
```

## Sign In
To login to the application for the first time please use the credentials below:

**Username:** manager@manager.com  
**Password:** admin

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
