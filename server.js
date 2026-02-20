const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const mongoose = require('mongoose');

app.use(logger);

 app.use(express.json());
 //                                        importing routes
const authRoutes = require("./routes/auth")
const taskRoutes = require("./routes/tasks")
//                                          mount routes 
app.use("/api/auth",authRoutes);
app.use("/api/tasks",taskRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanager', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

 const Port = 5000;

 app.listen(Port,()=>{
    console.log(`port is running at ${Port}`);
    
 })