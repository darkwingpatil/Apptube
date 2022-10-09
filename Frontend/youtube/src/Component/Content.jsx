import React from 'react'
import styles from "./Comp.module.css"
import {load} from "../Redux/Action"
import { useDispatch,useSelector } from 'react-redux'
import{useNavigate} from "react-router-dom"
import{Listdata} from "./Listdata"
import{channelID} from "../Redux/Action"


export const Content = () => {

const dispatch=useDispatch()
const state=useSelector((state)=>state)
console.log(state,"hh")
const[navi,setNavi]=React.useState(0)
const[tok,setTok]=React.useState(false)
const loader=React.useRef(null)
const navigate=useNavigate()



const handleobserver=(entries)=>{
    
    let target=entries[0]
    console.log(target)
    if(target.isIntersecting)
    {
        console.log(navi)
        setNavi((prev)=>prev+25)
    }
}

    React.useEffect(()=>{
        console.log("laod!!!!!!!")
        let val=""
        if(tok)
        {
            val="next"
        }
        else
        {
            val="data"
        }
        let toks=state.nexpag
        dispatch(load({val,toks,max:25}))
        setTok(true)      
    },[navi])

    React.useEffect(()=>{
        const option={
            root:null,
            rootMargin:"0px",
            threshold:1
        }
        const oberver=new IntersectionObserver(handleobserver,option)
        if(loader.current!=null)
        {
            oberver.observe(loader.current)
        }
    },[])



  return (
    <>
    <div className={styles.container}>
        {
            state.data.map((el,ind)=>{
                return(
                    <div className={styles.box}  onClick={()=>{

                        dispatch(channelID(el.snippet.channelId))
                        navigate(`/${el.id}`)
                        console.log(el.id,"for video ref")
                    }}> 
                    <Listdata {...el}/>
                        
                    </div>
                )
            })
        }

      <div ref={loader}></div>
    </div>
    </>
    
  )
}
