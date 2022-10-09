const {Router}=require("express")
const axios=require("axios")
const Data=Router()
const jwt=require("jsonwebtoken")
const {getTime} =require("../Logic/function")
const Datas=require("../Mongo/DataStruct")
const user=require("../Mongo/User")






// Data.get("/data",async(req,res)=>{
// const {count}=req.headers
// console.log(count,"gg")
// // let token=""
// // let arr=[]
// // for(let i=0;i<15;i++)
// // {
// //     let data=await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=${token}&regionCode=IN&key=${process.env.API_KEY}`)
// //     let outi=await getTime(data.data)

// //     outi.map(async(el)=>{
// //         await Datas.insertMany([el])
// //     })

// //     arr.push(...outi)
// //     if(data.data.nextPageToken==undefined)
// //     {
// //         break;
// //     }
// //     token=data.data.nextPageToken
// // }


// // res.send(arr)
// let ans=await Datas.find({}).skip(Number(count)).limit(20)
// res.send(ans)

// // res.send({outi,token:data.data.nextPageToken})


// })


//pageToken=${token}
Data.get("/data",async(req,res)=>{
    try{
        let{max}=req.headers
        if(max==undefined)
        {
            max=25
        }
            let data=await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${max}&regionCode=IN&key=${process.env.API_KEY}`)
            let outi=await getTime(data.data)
            res.send({outi,token:data.data.nextPageToken})
    }
    catch(e)
    {
        console.log(e)
    }

})

Data.get("/next",async(req,res)=>{
    try{
        const {token,max}=req.headers


        let data=await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${max}&pageToken=${token}&regionCode=IN&key=${process.env.API_KEY}`)
        let outi=await getTime(data.data)
        res.send({outi,token:data.data.nextPageToken})
    }
    catch(e)
    {
        console.log(e)
    }
   
})



Data.get("/title",async(req,res)=>{
    let data=await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=UdPisHeGMQM&key=${process.env.API_KEY}`)

    res.send({data})
})


// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=UdPisHeGMQM&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json



module.exports=Data


	
// 0	"CEsQAA"
// 1	"CGQQAA"
// 2	"CH0QAA"
// 3	"CJYBEAA"