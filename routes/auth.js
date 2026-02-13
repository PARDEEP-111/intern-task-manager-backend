const jwt =require("jsonwebtoken")
const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
     res.send(" auth  route workig")
})
 router.post("/login", (req,res)=>{
     const {username} = req.body
     if (!username){
          return res.status(400).json({message:"username required"})
     }
     const token = jwt.sign(
          {username},
          process.env.JWT_SECRET,
          {expiresIn: "1h"}
     )
     res.json({token})
 })
 const {registerUser}= require("../controllers/auth")
 router.post("/register",registerUser);
module.exports = router