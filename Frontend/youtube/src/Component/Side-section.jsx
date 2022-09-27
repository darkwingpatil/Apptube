import React from 'react'
import{AiFillHome } from "react-icons/ai"
import{AiOutlineCompass} from "react-icons/ai"
import styles from "./Comp.module.css"
export const Sidesection = () => {
  return (
    <div className={styles.sidesection}>
        <div className={styles.icons}>
            <AiFillHome style={{fontSize:"30px"}}/>
            <p>Home</p>
        </div>
        <div className={styles.icons}>
            <AiOutlineCompass style={{fontSize:"30px"}}/>
            <p>Explore</p>
        </div>

        <div className={styles.icons}>
            <img src="https://github.com/darkwingpatil/sudoku/blob/main/shorts.png?raw=true"/>
            <p>Shorts</p>
        </div>
        <div className={styles.icons}>
            <img src="https://github.com/darkwingpatil/sudoku/blob/main/subscri.png?raw=true"/>
            <p>Subscribe</p>
        </div>
        <div className={styles.icons}>
            <img src="https://github.com/darkwingpatil/sudoku/blob/main/libr.png?raw=true"/>
            <p>Library</p>
        </div>
    </div>
  )
}
