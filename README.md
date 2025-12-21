# intern-task-manager-backend
Node.js + Express backend with authentication and user-specific task management using file-based storage.


# Intern Task Manager Backend

A simple **Node.js + Express REST API** with authentication and **user-specific task management**, using **file-based JSON storage**.  
Built as a backend practice project for internship preparation.

---

## 🚀 Features
- User signup & login
- Password hashing with bcrypt
- JWT-based authentication
- User-specific tasks
- Create, read, and delete tasks
- Clean folder structure
- File-based storage (JSON)

---

## 🛠 Tech Stack
- Node.js
- Express.js
- bcrypt
- JSON Web Token (JWT)
- File system (JSON)

---

## 📁 Folder Structure
backend/
│
├── data/
│ ├── users.json
│ └── tasks.json
│
├── routes/
│ ├── auth.js
│ └── tasks.js
│
├── middleware/
│ └── authMiddleware.js
│
├── utils/
│ └── fileHandler.js
│
├── server.js
└── package.json

## 🔑 API Endpoints

### Authentication
- **POST** `/api/signup` – Register a new user
- **POST** `/api/login` – Login user

### Tasks (Protected)
- **GET** `/api/tasks` – Get logged-in user’s tasks
- **POST** `/api/tasks` – Add a new task
- **DELETE** `/api/tasks/:id` – Delete a task


---

## 📌 Notes
- This project uses **file-based storage** for simplicity.
- No database is used intentionally.
- Designed to demonstrate backend fundamentals clearly.

---

## 📈 Future Improvements
- Replace JSON storage with MongoDB
- Add task update functionality
- Improve validation and error handling

---

## 👨‍💻 Author
**Pardeep Singh**  
BCA Student | Aspiring Full Stack Developer