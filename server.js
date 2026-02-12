const express = require("express");
const mongoose = require("mongoose");
const app = express();
const logger = require("./middleware/logger");
app.use(logger)

mongoose.connect('mongodb://127.0.0.1:27017/TaskManager').then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err.message);
});

 app.use(express.json());
 //                                        importing routes
const authRoutes = require("./routes/auth")
const taskRoutes = require("./routes/tasks")
//                                          mount routes 
app.use("/api/auth",authRoutes);
app.use("/api/tasks",taskRoutes);

 const Port = 5000;

 app.listen(Port,()=>{
    console.log(`port is running at ${Port}`);
    
 })