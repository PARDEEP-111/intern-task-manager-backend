const express = require("express");
const router =  express.Router();
const auth = require("../middleware/auth")
const {readData,writeData}=  require("../utils/fileHandler")
     

router.get("/",auth, (req, res) => {
    const tasks = readData("tasks.json");
    res.json(tasks);
});
 
router.post("/", (req,res)=>{
    const {title} =req.body;
if(!title){
    return res.status(400).json({ message:"title is required"});
}
const tasks = readData("tasks.json");
 const newTask ={
    id: Date.now(),
    title
 }
    
     tasks.push(newTask)
     writeData("tasks.json",tasks)
     res.status(201).json(newTask)
})
module.exports = router;