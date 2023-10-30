# React web-development-tp-integ-front

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "*"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0

# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm run dev
```
  Navigate to `http://localhost:5173`


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies.                                                            |
| **public/images**        | All images public images used in the site. |
| **src/api**              | Contains all backend integrations (web-development-tp-integ-back).
| **src/components**       | Node components customized with style. |
| **src/context**          | Context and providers for characters and login. |
| **src/pages**            | Components for page's routes.      |                 
| **src/schemas**          | Schemas used for zod validator.      |                 
| **src**/App.tsx          | Entry point to node app.                                                               |
| package.json             | Contains npm dependencies.   | 

### Usages

- Backend
Banckend is build on repository https://github.com/morenolf/web-development-tp-integ-back and it need to be running locally on port 8091.


### Functionality

- Login

The site has integrated register and loging fuctionality base on tokens and email validated thru backend application. Once the user has arrived on the page it will be registration or loging. 
In case of registration, needs to provide user id, email and password. After it's registration it will be redirected to his characters page.
On the other side, needs to provide loging credentials.

- Characters

The user will be able to see there characters on character's page, create, delete and edit characters created.
The use will have a variaty of cloth divided by head, body, legs and feet.
There are only 4 slots to create characters, after that it will be show a warning.
Finally, it has the option to check the best last 5 created characters from all users.
