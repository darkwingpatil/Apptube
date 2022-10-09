import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import{Set} from "./Set"
import{Videoshow} from "./Component/Videoshow"
import{Routes,Route} from "react-router-dom"
import{LoginLoader} from "./Component/LoginLoader"
function App() {

  
  return(
      <Routes> 
        <Route path="/" element={<Set/>}></Route>
        <Route path='/:id' element={<Videoshow/>}></Route>
        <Route path="/login/:_id" element={<LoginLoader/>}></Route>
      </Routes>      
  )
}



export default App
