import {USER,ERROR,NAME,DATA,TOKEN} from "./Actiontypes"

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
export const name=(payload)=>{
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
export const token=(payload)=>{
    return{
        type:TOKEN,
        payload
    }
}


export const load=(data)=>(dispatch)=>{

    fetch(`http://localhost:8080/${data.val}`,{
        method:"GET",
        headers:{
            "token":data.toks
        },
    })
    .then((res)=>res.json())
    .then((data1)=>{
        console.log(data1,"ss")
        dispatch(data11(data1.outi))
    dispatch(token(data1.token))})
    .catch((e)=>dispatch(error()))
}