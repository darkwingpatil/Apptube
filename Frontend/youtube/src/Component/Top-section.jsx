import React from "react"
import img1 from "../assets/seart.png"
import img2 from "../assets/user.png"
import aud  from "../assets/audio.png"
import styles from "./Comp.module.css"
import menu from "../assets/menu.png"
import{FaVideo} from "react-icons/fa"
import{FaBell} from "react-icons/fa"
import { useSelector } from "react-redux"
export const TopSection=()=>{

    const state=useSelector((state)=>state)
    console.log(state)
    return(
        <div className={styles.topsection}> 
            <div className={styles.firstsec}>
             <img className={styles.firstsecimg} src={menu}/>   
             <img src="https://github.com/darkwingpatil/sudoku/blob/main/you1.png?raw=true" alt="icon"/>
            </div>
            <div className={styles.search}>
                <input placeholder="Search"/>
                <span><img src={img1}/></span>
                <span className={styles.span1}><img src={aud}/></span>
            </div>
            <>
            {
             (state.token)?
                <div>
                <div className={styles.signin}>
                    <img src={img2}/>
                    <p>SIGN IN</p>
                </div>
            </div>:
            <div className={styles.login}>
                <FaVideo style={{fontSize:"30px"}}/>
                <FaBell style={{fontSize:"30px"}}/>
                <div className={styles.circle}>A</div>
            </div>
            }
            </>


        </div>
    )
}