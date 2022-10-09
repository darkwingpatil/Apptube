import {USER,ERROR,NAME,DATA,TOKEN,REFRESHTOKEN,NEXTPAGE,CHANEELID} from "./Actiontypes"

export const user=(payload)=>{
    return{
        type:USER,
        payload
    }
}

export const error=()=>{
    return{
        type:ERROR
    }
}
export const namezz=(payload)=>{
    return{
        type:NAME,
        payload
    }
}
export const data11=(payload)=>{
    return{
        type:DATA,
        payload
    }
}
export const tokenzz=(payload)=>{
    return{
        type:TOKEN,
        payload
    }
}

export const channelID=(payload)=>{
    return{
        type:CHANEELID,
        payload
    }
}

export const nextpage=(payload)=>{
    return{
        type:NEXTPAGE,
        payload
    }
}
export const refreshtokenzz=(payload)=>{
    return{
        type:REFRESHTOKEN,
        payload
    }
}


export const load=(data)=>(dispatch)=>{

    fetch(`http://localhost:8080/${data.val}`,{
        method:"GET",
        headers:{
            "token":data.toks,
            "max":data.max
        },
    })
    .then((res)=>res.json())
    .then((data1)=>{
        // console.log(data1,"ss")
        dispatch(data11(data1.outi))
    dispatch(nextpage(data1.token))})
    .catch((e)=>dispatch(error()))
}