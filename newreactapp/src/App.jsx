import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import democomponent from './demoComponent'
import Demo2Component from './demo2Component'
import IngredientsList from './IngredientsList'

const ItemsList = ['Sugar', 'Salt', 'Flour', 'Eggs', 'Butter', 'Milk', 'Baking Powder', 'Vanilla Extract', 'Chocolate Chips'];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {democomponent()}
      <Demo2Component />
      <IngredientsList items={ItemsList} combo={true} />
    </>
  )
}

export default App
