const {Router}=require("express")

const Auth=Router()

const jwt=require("jsonwebtoken")
const user=require("../Mongo/User")

Auth.get("/subscribe",async(req,res)=>{
    const {token,chanel}=req.headers
    // console.log(chanel,"this is chanel id")
    // console.log(token,'see the tolkem')
    // try{

        var decoded = jwt.decode(token);
        console.log(decoded,"all here!")
        let userdata=await user.findOne({email:decoded.email})
        if(userdata.subscribed.includes(chanel))
        {
            let newdata=userdata.subscribed.filter((ele)=>ele!=chanel)
    
            await user.updateOne({email:decoded.email},{$set:{"subscribed":newdata}})
    
            return res.send({subscribe:false})
            
        }
        else
        {
            let ada=await user.updateOne({email:decoded.email},{$push:{"subscribed":chanel}})
    
            res.send({subscribe:true})
            return
        }
    // }
    // catch(e)
    // {
    //     console.log(e)
    //    res.status(401).send({subscribe:"unauthorized"})
    //    return 
    // }
})

module.exports=Auth