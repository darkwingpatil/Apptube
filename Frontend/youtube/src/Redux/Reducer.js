import {USER,ERROR,NAME,DATA,TOKEN,REFRESHTOKEN,NEXTPAGE,CHANEELID} from "./Actiontypes"
import{Load,Save} from "../Utils/Localstorage"
const initState={
    token:Load("user")||"",
    refreshtoken:Load("refuser")||"",
    error:false,
    name:Load("name")||"",
    count:"",
    data:[],
    nexpag:"",
    chnl:"",
}

export const Reducer=(state=initState,action)=>{
    switch(action.type)
    {
        case TOKEN:{
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

        case CHANEELID:{
            return{
                ...state,
                chnl:action.payload
            }
        }
        case NEXTPAGE:{
            return{
                ...state,
                nexpag:action.payload
            }
        }

        case DATA:{
            return{
                ...state,
                data:[...state.data,...action.payload]
            }
        }

        case REFRESHTOKEN:{
            Save("refuser",action.payload)
            return{
                ...state,
                refreshtoken:action.payload
            }
        }


        default:{
            return state
        }
    }
}