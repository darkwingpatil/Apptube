const {Router}=require("express")
const{getTokens1,mydata}=require("../Logic/function")
const Myuser=Router()
const user=require("../Mongo/User")
const jwt=require("jsonwebtoken")


Myuser.get("/google",(req,res)=>{
    res.redirect('https://accounts.google.com/o/oauth2/auth?approval_prompt=force&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&client_id=963158881727-8o2e3581vklmm9r9jf59v35u3hl47vmm.apps.googleusercontent.com&redirect_uri=http://localhost:8080/google/callback&response_type=code&access_type=offline')
})

Myuser.get("/google/callback",async(req,res)=>{
    const code=req.query.code;
  
    if(req.query.error)
    {
        return res.send("error occured"+ req.query.error_description)
    }
  
    const { id_token, access_token } = await getTokens1({
        code,
        clientId: "963158881727-8o2e3581vklmm9r9jf59v35u3hl47vmm.apps.googleusercontent.com",
        clientSecret: "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",
        redirectUri: "http://localhost:8080/google/callback",
      });
  
      console.log(access_token,"testing tinshhahw")
  
      const data=await mydata(id_token,access_token)
      console.log(data,"viewing!!")
  
    // const userObjectId = mongoose.Types.ObjectId(data._id)
    // await Blacklist.insertMany({user_id:userObjectId})

    let find=await user.findOne({email:data.email})

    console.log(find,"aa")
    if(find)
    {
      //  return res.send(find)
       let token=jwt.sign({name:data.name,email:data.email,picture:data.picture},"SECREATE123",{expiresIn:"120s"})
       let token1=jwt.sign({name:data.name,email:data.email,picture:data.picture},"SECREATE123",{expiresIn:"5h"})
       let add=await user.updateOne({email:data.email},{$set:{"Token":token,"refreshToken":token1}})
      return res.redirect(`http://127.0.0.1:5173/login/${find._id}`)
    }

    let token=jwt.sign({name:data.name,email:data.email,picture:data.picture},"SECREATE123",{expiresIn:"120s"})
    let token1=jwt.sign({name:data.name,email:data.email,picture:data.picture},"SECREATE123",{expiresIn:"5h"})
    let add=new user({
        name:data.name,
        email:data.email,
        picture:data.picture,
        Token:token,
        refreshToken:token1
    })

    await add.save()

    console.log(add,"dddddddddd")

    res.redirect(`http://127.0.0.1:5173/login/${add._id}`)
    // res.send(add)

    // res.redirect(`http://localhost:3000/afterOuth/${data._id}`)
    // res.redirect(`https://onemgclone.vercel.app/loading/${data._id}`)
  
  })

Myuser.get("/userdata",async(req,res)=>{
  const{myid}=req.headers;
  let userdata=await user.findOne({_id:myid})

  console.log(userdata)
  res.send({name:userdata.name,Token:userdata.Token,refreshToken:userdata.refreshToken})

})
module.exports=Myuser;