const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user")

exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const existingUser = await User.findOne({
    username
});
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        

        const newUser = await User.create({
    username,
    password: hashedPassword
});

        res.status(201).json({
            message: "user registered",
            id: newUser.id,
            username: newUser.username
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "server error"
        });
    }
}
exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        // validate
        if (!username || !password) {
            return res.status(400).json({ message: "All fields required" });
        }
        // find user
const foundUser = await User.findOne({
    username
});
        if (!foundUser) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        // compare password
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" }); 
        }
        // generate token
        const token = jwt.sign(
            { id: foundUser.id, username: foundUser.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        // send token
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}