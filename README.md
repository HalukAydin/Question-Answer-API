StackOverflow-Like API

This is a backend API for a question-and-answer platform, similar to Stack Overflow. It provides endpoints for managing users, questions, and answers, and includes full user authentication, likes, and password management.

Features:

Authentication: JWT-secured routes with token-based auth

Users: Register, login, profile management, password reset

Questions: CRUD, like/unlike, retrieve

Answers: CRUD, like/unlike, linked to questions

Likes: Like and undo like for questions/answers

Password Recovery: Forgot/reset flow

Tech Stack:
Node.js – Runtime environment
Express.js – API routing & middleware
MongoDB – NoSQL data store
Mongoose – ODM for MongoDB schemas
Docker – Containerization
GitHub Actions – CI pipeline

Local Setup (Without Docker):

Clone the repo: git clone https://github.com/yourusername/your-repo.git && cd your-repo

Install dependencies: npm install

Create a .env file in the root with the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000

Start the server: npm start

Run with Docker:
To run the project using Docker Compose: docker-compose up --build

App runs at: http://localhost:3000

MongoDB is available at mongo:27017

Healthcheck:
GET /health
Response: { "status": "ok" }

CI/CD Pipeline (GitHub Actions):
CI runs on every push to dev and pull request to main.
Pipeline steps:

Checkout code

Setup Node

Install dependencies

Run tests (if any)
Workflow file location: .github/workflows/ci.yml

API Overview:

User Routes:

Register, Login, Logout

Profile by ID

Update/Delete/Block user

Forgot & Reset password

Question Routes:

Ask, Get, Edit, Delete question

Like / Unlike question

Answer Routes:

Add, Edit, Delete answer

Like / Unlike answer

Get questions with answers

Deployment Targets:

Local Docker (✅)

AWS ECS Fargate (🔜 coming soon)

.env Example:
MONGO_URI=mongodb://mongo:27017/qa
JWT_SECRET=your_secret_key
PORT=3000