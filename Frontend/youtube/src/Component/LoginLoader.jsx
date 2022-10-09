import React from 'react'

import{BiLoaderAlt} from "react-icons/Bi"
import { useParams } from 'react-router-dom'
import{tokenzz,refreshtokenzz,namezz} from "../Redux/Action"
import{useDispatch,useSelector} from "react-redux"
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'
export const LoginLoader = () => {

    const {_id}=useParams()
    console.log(_id,"lets check")
    const state=useSelector((state)=>state)
    console.log(state,"ll")
    const navigate=useNavigate()

    if(state.token!="")
    {
        navigate("/",{replace:true})
    }
    const dispatch=useDispatch()
    React.useEffect(()=>{
        fetch("http://localhost:8080/userdata",{
            method:"GET",
            headers:{
                "myid":_id
            }
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data)

            dispatch(namezz(data.name))
            dispatch(tokenzz(data.Token))
            dispatch(refreshtokenzz(data.refreshToken))
        })
        .then((err)=>console.log(err))
    },[])
  return (
    <div>
       <CircularProgress style={{marginLeft:"45%",marginTop:"5%"}}/>
    </div>
  )
}
