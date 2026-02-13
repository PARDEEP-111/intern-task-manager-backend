const jwt = require("jsonwebtoken")
module.exports = function (req, res, next) {

    const authHeader = req.headers["authorization"]
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" })
    }
    if (!token) {
        return res.status(401).json({ message: "Wrong token format" })
    }
    const token = authHeader.split(" ")[1]; 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch(error)
    {
        console.log(error.message)
        return res.status(403).json({ message: "Invalid or expired token provided" })

    }
    
}