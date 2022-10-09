import React from 'react'
import styles from "./Comp.module.css"
export const Listdata = (props) => {

  return (
    <>
                <img src={props.snippet.thumbnails.high.url}/>
                        
                        <div>
                            <div className={styles.titlelogo}>
                                <img src={""} height="40" width="40" style={{borderRadius:"20px",marginTop:"4%",marginRight:"5%"}}/>
                                <div>
                                 <p style={{fontWeight:"bold"}}>{props.snippet.title}</p>
                                 <div>
                                   <small className={styles.small}>{props.snippet.channelTitle}</small>
                                   <div className={styles.views}>
                                     <small className={styles.small}>{props.statistics.viewCount} views</small>
                                     <small className={styles.small}> • </small>
                                     <small className={styles.small}>{props.uploaded} ago</small>
                                   </div>

                            </div>
                                </div>
                                
                            </div>

                        </div>
    </>
  )
}
