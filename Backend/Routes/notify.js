const express = require("express");
const { authMiddleware, authenticateSkt } = require("../middleware");
const {Server}=require("socket.io")
const router = express.Router();
const {Notification}= require("../db")
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
    // try{
        const {userId,message,type}=req.body;
        const notification= new Notification({userId,message,type});
        await notification.save();

        io.to(userId).emit("notification",notification);

        res.status(201).json(notification);

    // } catch (error){
    //     res.status(500).json({error:"failed to create Notification"});

    // }
    console.log(error);


})





module.exports= router;
