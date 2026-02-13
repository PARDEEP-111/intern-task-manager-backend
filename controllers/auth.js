const bcrypt = require("bcrypt");
const user = require("../model/user");
const jwt = require("jsonwebtoken")
exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "All fields required" }); d
        }
        const existingUser = await user.findOne({ username })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
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
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "server error"
        });

    }
}
exports.loginUser = async (req, res) => {
    try {
        const { username, password } = res.body;
        // validate
        if (!username || !password) {
            return res.status(401).json({ message: "All fields required" })
        }
        // find user
        const user = await user.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        // compare password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        // generate token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        // send token
        res.json({ token })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });

    }
}