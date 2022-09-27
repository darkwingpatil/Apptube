export const Load=(key)=>{

    try{
        let data=localStorage.getItem(key)
        data=JSON.parse(data)
        return data
    }
    catch(e)
    {
        return undefined
    }
} 


export const Save=(key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}