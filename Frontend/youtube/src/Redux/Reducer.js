import {USER,ERROR,NAME,DATA,TOKEN} from "./Actiontypes"
import{Load,Save} from "../Utils/Localstorage"
const initState={
    token:Load("user")||"",
    error:false,
    name:Load("name")||"",
    count:"",
    data:[]
}

export const Reducer=(state=initState,action)=>{
    switch(action.type)
    {
        case USER:{
            Save("user",action.payload)
            return{
                ...state,
                token:action.payload
            }
        }
        case ERROR:{
            return{
                ...state,
                error:true
            }
        }

        case NAME:{
            Save("name",action.payload)
            return{
                ...state,
                name:action.payload
            }
        }

        case DATA:{
            return{
                ...state,
                data:[...state.data,...action.payload]
            }
        }

        case TOKEN:{
            return{
                ...state,
                token:action.payload
            }
        }

        default:{
            return state
        }
    }
}