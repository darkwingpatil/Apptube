const {Router}=require("express")
const axios=require("axios")
const Data=Router()
const {getTime} =require("../Logic/function")
const Datas=require("../Mongo/DataStruct")




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
        let data=await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${process.env.API_KEY}`)
        let outi=await getTime(data.data)
        res.send({outi,token:data.data.nextPageToken})
})

Data.get("/next",async(req,res)=>{
    const {token}=req.headers
    let data=await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&pageToken=${token}&regionCode=IN&key=${process.env.API_KEY}`)
    let outi=await getTime(data.data)
    res.send({outi,token:data.data.nextPageToken})
})



module.exports=Data


	
// 0	"CEsQAA"
// 1	"CGQQAA"
// 2	"CH0QAA"
// 3	"CJYBEAA"