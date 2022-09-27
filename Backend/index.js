const express=require("express")
const app=express()
const Data=require("./Routes/Data")
const mongoose=require("mongoose")

const Myuser=require("./Routes/User")

const connect=mongoose.connect("mongodb+srv://App123:Darkwing123@cluster0.56dvjei.mongodb.net/youtube?retryWrites=true&w=majority")
const cors=require("cors")
require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",Data)
app.use("/",Myuser)

app.get("/",(req,res)=>{
    res.send("welcome to app youtube")
})

app.listen(8080,async()=>{
    connect
    console.log("server started")
})