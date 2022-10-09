import React from 'react'
import{useParams,useNavigate} from "react-router-dom"
import{TopSection} from "./Top-section"
import styles from "./Comp.module.css"
import {load} from "../Redux/Action"
import{Listdata} from "./Listdata"
import{useSelector,useDispatch} from "react-redux"
var months=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]

export const Videoshow = () => {
    const {id}=useParams()
    const state=useSelector((state)=>state)
    // console.log(state,"Ss")
    const dispatch=useDispatch()
// console.log(state,"hh")
const navigate=useNavigate()
const[navi,setNavi]=React.useState(0)
const[tok,setTok]=React.useState(false)
const[Tosubscribe,setsubscribe]=React.useState("")
const[confirm,setconfirm]=React.useState("false")
const[otherDetails,setOtherdetails]=React.useState([])
const loader=React.useRef(null)
const background=React.useRef(null)



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
        // console.log("laod!!!!!!!")
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
        dispatch(load({val,toks,max:10}))
        setTok(true)      
    },[navi])

    React.useEffect(()=>{

        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDcG7rGmf8XyyRHAfFc5-wDZJja_1w2jyA`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.items,"this is data")
        setOtherdetails(data.items)})
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
    <div>
        <TopSection/>
        <div className={styles.videoAdjust}>
            <div>
            <iframe src={`https://www.youtube.com/embed/${id}`}  height="482" width="927" className={styles.iframe} ></iframe>
            <p>{otherDetails.length>0?otherDetails[0].snippet.localized.title:""}</p>
            <p>{otherDetails.length>0?otherDetails[0].statistics.viewCount:""} views</p>
            <p>{otherDetails.length>0?months[Number(otherDetails[0].snippet.publishedAt[5]+otherDetails[0].snippet.publishedAt[6])-1]+" "+otherDetails[0].snippet.publishedAt[5]+otherDetails[0].snippet.publishedAt[6]+","+otherDetails[0].snippet.publishedAt[0]+otherDetails[0].snippet.publishedAt[1]+otherDetails[0].snippet.publishedAt[2]+otherDetails[0].snippet.publishedAt[3]:""} views</p>
        <button className={styles.subs}onClick={()=>{

            if(state.token=="")
            {
                window.location.href="http://localhost:8080/google"
            }
            if(Tosubscribe=="")
            {
                setsubscribe("true")
                background.current.style.background="#303030"
                
            }

            else if(Tosubscribe=="false")
            {
                background.current.style.background="#303030"
                setsubscribe("true")
                
            }
            if(Tosubscribe=="true")
            {
               setconfirm("true")
             }

            fetch("http://localhost:8080/auth/subscribe",{
                method:"GET",
                headers:{
                    token:state.token,
                    chanel:state.chnl,
                    refresh:state.refreshtoken
                }
            })
            .then((res)=>res.json())
            .then((data)=>{console.log(data)
                if(data.subscribe=="unauthorized")
                {
                    window.location.href="http://localhost:8080/google"
                    return
                }
                if(data.subscribe==true)
                {
                    background.current.innerText="subscribed"
                }
            })
            .catch((e)=>console.log(e))
        }}  ref={background}>{state.token==""?"SignIn":Tosubscribe==""?"subscribe":Tosubscribe=="true"?"subscribed":"subscribe"}</button>
            </div>

            {
                (confirm=="true")?
                <div>
                    <div>{`Unsubscribe from xyz?`}</div>
                    <div>
                        <button onClick={()=>{
                            setsubscribe("true")
                            setconfirm("false")
                        }}>CANCEL</button>
                        <button onClick={()=>{
                            setsubscribe("false")
                            background.current.style.background="#d32a00"
                            setconfirm("false")
                        }}>UNSUBSCRIBE</button>
                    </div>
                </div>:<></>
            }

        <div>
            {
                state.data.map((ele)=>{
                    return(
                        <div className={styles.box3}> 
                        <Listdata {...ele}/>
                        </div>
                    )
                })
            }
            <div ref={loader}></div>
        </div>
        </div>
        

    </div>
  )
}
