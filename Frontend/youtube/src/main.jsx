import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import{Provider} from "react-redux"
import{Store} from "./Redux/Store"
import{BrowserRouter} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <BrowserRouter>
         <App />
        </BrowserRouter>
     
    </Provider>
)
