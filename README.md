<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Todo List Backend (NestJS + MongoDB)

This is the backend for the Todo List application, built using **NestJS** and **MongoDB** with a REST API.

## Features
- CRUD operations for tasks
- RESTful API with NestJS
- MongoDB as the database
- Uses Mongoose for schema modeling
- Error handling and validation

## Prerequisites
Make sure you have the following installed:
- **Node.js** (>=16.x)
- **MongoDB** (local or cloud-based like MongoDB Atlas)
- **npm** (or yarn)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/todo-nestjs-backend.git
   cd todo-nestjs-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and configure it as follows:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/todo_db  # Change if using MongoDB Atlas
   ```

4. Start the server:
   ```sh
   npm run start:dev
   ```

## API Endpoints

### 1. Get all tasks
   ```http
   GET /tasks
   ```
   **Response:**
   ```json
   [
     {
       "_id": "60a8fcd1...
       "description": "Buy groceries",
       "done": false
     }
   ]
   ```

### 2. Create a new task
   ```http
   POST /tasks
   ```
   **Body:**
   ```json
   {
     "description": "New task"
   }
   ```

### 3. Update a task
   ```http
   PATCH /tasks/:id
   ```
   **Body:**
   ```json
   {
     "done": true
   }
   ```

### 4. Delete a task
   ```http
   DELETE /tasks/:id
   ```

## Project Structure
```
📂 todo-nestjs-backend
 ├── src
 │   ├── tasks
 │   │   ├── dto
 │   │   ├── schemas
 │   │   ├── tasks.controller.ts
 │   │   ├── tasks.service.ts
 │   ├── app.module.ts
 │   ├── main.ts
 ├── .env
 ├── package.json
 ├── README.md
```

## Technologies Used
- **NestJS** (TypeScript framework for Node.js)
- **MongoDB** (NoSQL database)
- **Mongoose** (ODM for MongoDB)
- **Swagger** (for API documentation)

## Running with Docker (Optional)
If you want to run the backend with Docker:
```sh
docker-compose up -d
```

## License
MIT License


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
