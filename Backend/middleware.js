const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;


const jwt = require("jsonwebtoken");


const authMiddleware = function (req, res, next) {
    const authHeader = req.headers.authorization;


    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({
            msg: "there was an error in authorization"
        })
    }

    const token = authHeader.split(' ')[1];


    try {
        const decoded = jwt.verify(token, JWT_SECRET);


        req.user= decoded;
        next();
    }
    
    catch (err) {
        return res.status(404).json({
            msg: "there is an error while validating",
            
        })
        
    }
    
}




const authenticateSkt = (socket, next) => {
    const token = socket.handshake.auth.token;


    if (!token) return next(new Error("Authenticate error"));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(new Error("Authentication error"));
        socket.user = user;
        next();
    });
}

module.exports = {
    authMiddleware,
    authenticateSkt
};