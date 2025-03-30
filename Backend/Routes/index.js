const express=require("express");
const notify = require("./notify");
const userRouter=require("../Routes/Users")

const router=express.Router();


router.use("/notify",notify);
router.use("/user",userRouter)


module.exports=router;
