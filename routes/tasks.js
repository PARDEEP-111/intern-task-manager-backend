const express = require("express")
const router = express.Router()
const authMiddlewere = require("../middleware/authMiddleware")
const Task = require("../model/task")


// protects all routes
router.use(authMiddlewere)


// gets all tasks for loged in user
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find({
            owner: req.user.id
        });
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
})

// creates new tasks

router.post("/", async (req, res) => {
    try {
        const { title,description } = req.body
        if (!title) {
            return res.status(400).json({
                message: "title is required"
            })
        }
        const newTask = await Task.create({
            title,
            description,
            owner: req.user.id
        })
        res.status(201).json(newTask)
    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
})

// Delet tasks

router.delete("/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findOneAndDelete({
            _id: req.params.id,
            owner: req.user.id
        })
        if (!deletedTask) {
            return res.status(404).json({
                message: " Task not found  or not allowed"
            })
        }
        res.json({
            message: "task deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
})
// update task
router.patch("/:id",async (req,res)=>{
    try{
        const {title,description, completed}= req.body;
const updateTask = await Task.findOneAndUpdate(
    {
        _id: req.params.id,
        owner: req.user.id
    },
    {
        title,
        description,
        completed
    },
    {
        new: true
    }
)
    if(!updateTask){
        return res.status(404).json({
            message: "Task not found or not allowed"
        });
    }
    res.json(updateTask);
    }catch(error){
      res.status(500).json({
        message:"server error"
      })  
    }
})

module.exports = router;
