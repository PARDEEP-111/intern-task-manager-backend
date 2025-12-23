const express = require("express");
const router =  express.Router();

router.get("/", (req,res)=>{
    res.send("task router working")
})
 module.exports =router