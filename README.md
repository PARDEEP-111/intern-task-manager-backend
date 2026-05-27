# Intern Task Manager Backend

A secure REST API built with Node.js, Express, and MongoDB for user authentication and task management.

This project was built as a backend practice project to learn real-world backend concepts such as authentication, authorization, CRUD operations, route protection, and database integration.

---

## 🚀 Features

### Authentication
- User registration
- User login
- Password hashing using bcrypt
- JWT authentication
- Protected routes

### Task Management
- Create tasks
- Read user-specific tasks
- Update tasks
- Delete tasks
- Ownership-based authorization

### Validation & Security
- Input validation
- Prevent empty/space-only titles
- Dynamic PATCH updates
- User-specific task access
- Environment variable support

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- dotenv

---

## 📁 Folder Structure

```bash
intern-task-manager-backend/
│
├── controllers/
│   └── auth.js
│
├── middleware/
│   └── authMiddleware.js
│
├── model/
│   ├── task.js
│   └── user.js
│
├── routes/
│   ├── auth.js
│   └── tasks.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md