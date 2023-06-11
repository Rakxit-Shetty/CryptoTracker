// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-alice-carousel/lib/alice-carousel.css';
import CryproContext from './CryproContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
<CryproContext>
<App />
</CryproContext>
 
  // </React.StrictMode>,
)
