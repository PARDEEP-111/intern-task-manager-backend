const  express = require("express");
const app = express();

 app.use(express.json());

 app.get("/",(req,res)=>{
    res.send("app is working")
 });
 const Port = 5000;

 app.listen(Port,()=>{
    console.log(`port is running at ${Port}`);
    
 })