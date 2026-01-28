import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import democomponent from './demoComponent.jsx'
import Demo2Component from './demo2Component.jsx'
import IngredientsList from './IngredientsList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
