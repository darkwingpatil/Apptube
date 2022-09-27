const mongoose=require("mongoose")

const DataSchema=mongoose.Schema({
    kind:String,
    etag:String,
    id:String,
    snippet:Object,
    contentDetails:Object,
    statistics:Object,
    uploaded:String
})

const Datas=mongoose.model("Datas",DataSchema)


module.exports=Datas