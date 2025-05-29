const express = require("express");
const { authMiddleware, authenticateSkt } = require("../middleware");
const {Server}=require("socket.io")
const router = express.Router();
const {Notification, User}= require("../db")
const http = require("http");  
const { error } = require("console");
const server = http.createServer();


const io = new Server(server,{
    cors:{
        origin:"*",
    },
});


io.use(authenticateSkt);

io.on ("connection",(socket)=>{
    console.log("A user Connected");

    const userId =socket.user.userId;

    socket.join(userId);

    socket.on("disconnect",()=>{
        console.log("user Disconnected")
    })
})



router.get("/notification",authMiddleware,async function(req,res){
    try{
        const notification= await  Notification.find({userId:req.user.userId});
        res.json(notification);

    }catch(error){
        res.status(500).json({error:"failed  to retrive notification"});


    }
});



router.post("/notification",authMiddleware,async function (req,res){

        const { username, message, type } = req.body;

  
        if (!username || !message || !type) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

    
        const userId = user._id;
        const notification = new Notification({ userId, message, type });
        await notification.save();


        io.to(userId.toString()).emit("notification", notification);

        res.status(201).json(notification);
    // 
    console.log(error);


})





module.exports= router;
