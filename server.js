const express = require("express");
const app = express();
const logger = require("./middleware/logger");
app.use(logger);

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