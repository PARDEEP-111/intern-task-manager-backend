const express = require("express")
const router = express.Router()
const {registerUser, loginUser} = require("../controllers/auth")

router.get("/", (req,res)=>{
     res.send("auth route working")
})

router.post("/register", registerUser);
router.post("/login", loginUser)
module.exports = router