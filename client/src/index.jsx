import React, {} from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App.jsx'
import './assets/styles.css'
import './assets/bootstrap.min.css'

document.documentElement.setAttribute('lang', 'en')
const container = document.createElement('div')
container.setAttribute('id', 'root')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
