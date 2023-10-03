# Backend Guardian Security App 💻

Main base of the services used within the Guardian Security App

- Built with:

- Bcrypt: [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)
- Cloudinary: [https://cloudinary.com/](https://cloudinary.com/)
- Nodemailer: [https://nodemailer.com/](https://nodemailer.com/)
- JSON WebToken: [https://jwt.io/](https://jwt.io/)
- Node.js: [https://nodejs.org/es](https://nodejs.org/es)
- Express: [https://expressjs.com/](https://expressjs.com/)
- MongoDB: [https://www.mongodb.com/](https://www.mongodb.com/)
- Mongoose: [https://mongoosejs.com/](https://mongoosejs.com/)

## Prerequisites 📋

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 18.15 LTS.

## Installation 🔧

   1. Clone the repository: https://github.com/PVARGASM1/back-end-guardian-security

   2. cd back-end-guardian-security

   2. Run npm install or yarn to install server dependencies.

## 🛠️ Local development

    npm run dev
    Or you can use
    $ yarn dev


## Express Router and Routes

## Auth Local

| Route               | HTTP Verb | Description                          |
| --------------------| ----------| ------------------------------------ |
| /auth/local/login   | POST      | User login                           |

## User Routes

| Route               | HTTP Verb | Description                  |
| --------------------| --------- | -----------------------------|
| /api/user           | GET       |Get list of all users         | 
| /api/user/:id       | GET       |Get a single user             |
| /api/user           | POST      |Creates a new user            |
| /api/user/:id       | PUT       |Update a single user          |
| /api/users/:id      | DELETE    |Deletes an user by admin role |


## Usage

The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a note or log in, here we have some examples.

### Authentication **user** `/auth/local/login`

This backend application uses JWT (JSON Web Tokens) for authentication. Users can obtain an access token by providing valid credentials (email and password)

Request Body:

```json
{
  "email": "andrea18@test.com",
  "password": "1234"
}
```

Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsbTB4MHpleDAwMDB1bHZodjZtZXVhbTkiLCJlbWFpbCI6ImF2QHRlc3QuY29tIiwiaWF0IjoxNjk0ODMyNjcxLCJleHAiOjE2OTQ5MTkwNzF9.fpD5shIH6Wuh-2G3P88MWVyEuYo_33zt4q_f3i1NmJI",
  "profile": {
    "id": "62fd77a4d25acc4a4e5df3d1",
    "name": "Andrea",
    "email": "andrea18@test.com"
  }
}
```

### Basic example **Create User** `/api/user`

Request Body:

```json
{
  "name": "Andrea",
  "email": "andrea18@test.com",
  "password": "1234"
}
```

Response:

```json
{
  "name": "Andrea",
  "email": "andrea18@test.com",
}
```

### Developing 🛠️

1. Clone the repository

2. Run `npm install` to install server dependencies.

3. Configure the env running `cp .env.example .env`

4. Run `npm run dev` to start the development server.

## License

This project is licensed under the [MIT](LICENSE).

## Authors 👥✒️

- Andrea Vargas - (https://github.com/PVARGASM1)
