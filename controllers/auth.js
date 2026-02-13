 const bcrypt = require("bcrypt");
 const user = require("../model/user");
 exports.registerUser = async (req,res)=>{
    try{
        const {username, password}= req.body;
        if(!username || !password){
            return res.status(400).json({message:"All fields required"});d
        }
        const existingUser = await user.findOne({username})
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPasword = await bcrypt.hash(password, 10);

        const user = await user.create({
            username,
            password: hashedPassword
        });
        res.status(201).json({
            message: "user registered",
            id: user._id,
            ussername: user.username
        })
    } catch(error){
        console.log(error);
        res.status(500).json({
            message: "server error"
        });
        
    }
 }