const express=require("express")
const app=express()
const Data=require("./Routes/Data")
const mongoose=require("mongoose")
const helmet=require("helmet")
const jwt=require("jsonwebtoken")
const user=require("./Mongo/User")


const Myuser=require("./Routes/User")
const Auth=require("./Routes/Auth")
const connect=mongoose.connect("mongodb+srv://App123:Darkwing123@cluster0.56dvjei.mongodb.net/youtube?retryWrites=true&w=majority")
const cors=require("cors")
require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to app youtube")
})
app.use("/",Data)
app.use("/",Myuser)

app.use(async(req,res,next)=>{

    const{token,refresh}=req.headers
    console.log(!token,"t/f")
    console.log(token,"here!!")

    if(token)
    {
        try{
            let decoded = jwt.verify(token, "SECREATE123");
            console.log("token is valid")
            return next()
        }
        catch(e)
        {
            console.log(e)
            try{
                let decode2=jwt.verify(refresh, "SECREATE123");
                return next()
            }
            catch(err)
            {
                return res.status(401).send({subscribe:"unauthorized"})
            }
            
        }
    }
    else
    {
        console.log("first time user login")
        return res.status(401).send({subscribe:"unauthorized"})
    }
})
app.use("/auth",Auth)



app.listen(8080,async()=>{
    connect
    console.log("server started")
})