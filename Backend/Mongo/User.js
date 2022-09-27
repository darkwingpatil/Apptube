const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    email:String,
    name:String,
    picture:String,
    Token:String,
    refreshToken:String,
    subscribed:{type:Array,"default":[]},
})

const user=mongoose.model("Users",userSchema)


module.exports=user