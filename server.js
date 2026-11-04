require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const mongoose = require('mongoose');
const cors = require("cors");
app.use(logger);
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://intern-task-manager-backend.vercel.app"
    ]
}));
 app.use(express.json());
 //                                        importing routes
const authRoutes = require("./routes/auth")
const taskRoutes = require("./routes/tasks")
//                                          mount routes 
app.use("/api/auth",authRoutes);
app.use("/api/tasks",taskRoutes);

// Connect to MongoDB
// mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanager', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

 const Port = process.env.PORT || 5000; 

 app.listen(Port,()=>{
    console.log(`port is running at ${Port}`);
    
 }) 
 console.log("MONGO_URI:", process.env.MONGODB_URI);