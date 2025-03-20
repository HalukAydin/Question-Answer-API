# StackOverflow-Like API

This project is a backend API for a question-and-answer platform, similar to Stack Overflow. It provides endpoints for managing users, questions, and answers, ensuring that all entities are associated with unique user IDs.

## Features
- **User Management**: Users can register, log in, retrieve profiles, and manage their accounts.
- **Questions**: Users can post, update, delete, and retrieve questions.
- **Answers**: Users can submit, edit, delete, and retrieve answers for questions.
- **Likes & Undo Likes**: Users can like and undo likes for both questions and answers.
- **Authentication & Authorization**: Secure API using JWT-based authentication.
- **Password Management**: Users can reset passwords and recover accounts.

## Tech Stack
- **Node.js** - Backend runtime environment
- **Express.js** - Web framework for building APIs
- **MongoDB** - NoSQL database for storing user, question, and answer data
- **Mongoose** - ODM library for MongoDB schema and data modeling

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     PORT=your_preferred_port
     ```

## Usage
1. Start the server:
   ```sh
   npm start
   ```
2. The API will be accessible at `http://localhost:<PORT>`.

## API Endpoints
### User Routes
- **Register & Authentication**:
  - Register a new user
  - Login functionality
  - Logout functionality
  - Forgot password & Reset password
- **User Management**:
  - Get user profile
  - Get a user by ID
  - Retrieve all users
  - Block and delete users
  - Edit user profile

### Question Routes
- Ask a new question
- Get all questions
- Get a single question
- Edit a question
- Like & unlike a question
- Delete a question

### Answer Routes
- Get questions with their answers
- Add an answer to a question
- Edit an answer
- Delete an answer
- Like & unlike an answer

## Authentication
- The API uses **JWT-based authentication**.
- Users must include a token in the `Authorization` header for protected routes:
  ```sh
  Authorization: Bearer <your_token>
  ```