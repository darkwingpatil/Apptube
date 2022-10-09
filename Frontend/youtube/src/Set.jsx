import React from 'react'
import './App.css'
import{TopSection} from "./Component/Top-section"
import{Sidesection} from "./Component/Side-section"
import{Content} from "./Component/Content"


export const Set = () => {
  return (
    <div id="top">
    <TopSection/>
    <div className='section-two'>
    <Sidesection/>
    <Content/>
    </div>     
  </div>
  )
}
