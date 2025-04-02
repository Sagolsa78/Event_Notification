const mongoose =require ("mongoose");

require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {

});



const UserSchema =new mongoose.Schema({
    username:{
        trim:true,
        required:true,
        type:String,
        minLength:5,
        maxLength:50,

    },

    password:{
        trim:true,
        required:true,
        type:String,
        minLength:6,


    },
    firstname:{
        trim:true,
        required:true,
        type:String,
        minLength:2,
        maxLength:50,

    },
    lastname:{
        trim:true,
        rerquired:true,
        type:String,
        maxLength:50,
        minLength:3,
    },
    organization:{
        type:String,
    }

})


const EventSchema= new mongoose.Schema({
    Type:{
        required:true,
        trim:true,
        type:String,

    },
    Location:{
        required:true,
        type:String,

    },
    Time:{
        type:Number,
        required:true,
    },
    organizer:{
        type:String,
        required:true
    }
})

const NotifyMessage= new mongoose.Schema({
    username:{
        type:String,
    

    },
    message:{
        type:String,
        required:true,

    },
    type:{
        type:String,
        required:true,

    }
})


const User =mongoose.model("User",UserSchema);
    const Event= mongoose.model("Event",EventSchema);
    const Notification=mongoose.model("Message",NotifyMessage);


module.exports={
    User,
    Event,
    Notification
};
