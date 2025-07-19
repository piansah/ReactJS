import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloPian from './HelloPian.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloPian/>
    <HelloPian/>
    <HelloPian/>
  </StrictMode>,
)
