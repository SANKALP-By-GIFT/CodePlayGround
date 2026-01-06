import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-emerald-900 text-red-500'>
        Hi Biswajit
    </div>
  </StrictMode>,
)
