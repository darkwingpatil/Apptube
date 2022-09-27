import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import{TopSection} from "./Component/Top-section"
import{Sidesection} from "./Component/Side-section"
import{Content} from "./Component/Content"
function App() {

  
  return(
    <div id="top">
      <TopSection/>
      <div className='section-two'>
      <Sidesection/>
      <Content/>
      </div>

      
    </div>
  )
}



export default App
