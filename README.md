# Intern Task Manager Backend

This project is part of my journey to learn full-stack web development and prepare for internships.

I built this backend to practice real backend concepts like:
- authentication
- authorization
- CRUD operations
- MongoDB integration
- REST APIs
- route protection
- validation

The goal is to eventually connect this backend with a React / Next.js frontend and build a complete full-stack application.

---

## 🚀 What This Project Can Do

### Authentication
- Register users
- Login users
- Hash passwords using bcrypt
- Generate JWT tokens
- Protect private routes

### Task Management
- Create tasks
- Read logged-in user tasks
- Update tasks
- Delete tasks
- Restrict users to only their own tasks

### Validation & Security
- Prevent empty titles
- Prevent space-only values
- Protected routes using middleware
- Environment variable support

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JWT
- dotenv

### Frontend (Planned)
- React.js
- Next.js
- Tailwind CSS

---

## 📁 Project Structure

```bash
intern-task-manager-backend/
│
├── controllers/
├── middleware/
├── model/
├── routes/
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md
