import React from 'react'
import styles from "./Comp.module.css"
import {load} from "../Redux/Action"
import { useDispatch,useSelector } from 'react-redux'


export const Content = () => {

const dispatch=useDispatch()
const state=useSelector((state)=>state)
console.log(state,"hh")
const[navi,setNavi]=React.useState(0)
const[tok,setTok]=React.useState(false)
const loader=React.useRef(null)



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
        let toks=state.token
        dispatch(load({val,toks}))
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
                    <div className={styles.box}> 
                        <img src={el.snippet.thumbnails.high.url}/>
                        
                        <div>
                            <div className={styles.titlelogo}>
                                <img src={""} height="40" width="40" style={{borderRadius:"20px",marginTop:"4%",marginRight:"5%"}}/>
                                <div>
                                 <p style={{fontWeight:"bold"}}>{el.snippet.title}</p>
                                 <div>
                                <small className={styles.small}>{el.snippet.channelTitle}</small>
                                <div className={styles.views}>
                                 <small className={styles.small}>{el.statistics.viewCount} views</small>
                                 <small className={styles.small}> • </small>
                                 <small className={styles.small}>{el.uploaded} ago</small>
                                </div>

                            </div>
                                </div>
                                
                            </div>

                        </div>
                        
                    </div>
                )
            })
        }

      <div ref={loader}></div>
    </div>
    </>
    
  )
}
