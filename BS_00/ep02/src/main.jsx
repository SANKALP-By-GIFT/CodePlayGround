import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const user = {
  name: "Biswajit Sahoo",
  age: 26,
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App user={user} />
  </StrictMode>,
)
