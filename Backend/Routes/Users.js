const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");



dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;



const signupBody = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string(),
    type:zod.string(),

})

router.post("/signup", async (req, res) => {
    const success  = signupBody.safeParse(req.body)
    

    if (!success) {
        return res.status(411).json({
            msg: "EMAil already taken/incorrect inputs"

        })
    }

    // try {
        
        // console.log(username)
        const existingUser = await User.findOne({
            username:req.body.username

            
        })
       


        if (existingUser) {
            return res.status(411).json({
                msg: "Email aleardy taken/"
            })
        }
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            type:req.body.type
        })

        const userId = user._id;

        


        const token = jwt.sign({
            userId
        }, JWT_SECRET);
        


        res.json({
            msg: "User created successfully ",
            token: token
        })
    // }
    // catch {
    //     return res.status(411).json({
    //         msg: 'error while creating user'
    //     })
    // }
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})


router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)

    if (!success) {
        return res.status(411).json({
            msg: "Email or password incorrect"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password

    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })

        return;

    }
    res.status(411).json({
        msg: "error while logging in"
    })
})




router.get("/bulk",async (req,res)=>{
    const filter=req.query.filter|| "";

    const users=await User.find({
        $or:[{
            firstname:{
                "$regex":filter
            }

        },{
            lastname:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user:users.map(user=>({
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id
        }))
    })
})

module.exports = router;