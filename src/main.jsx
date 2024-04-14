import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Principal } from './Principal'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Principal />
  </React.StrictMode>
  </BrowserRouter>
)
