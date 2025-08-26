import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// React controls the UI... we need hooks to sync UI and state and other actions...
  let [counter, setCounter] = useState(15)   // Parameters - the state and the new state and the names are variables hence can be set to anything

  // let counter = 15

  const addValue = ()=>{
    counter = counter + 1
    setCounter(counter)  // or directly setCounter(counter+1)
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>React with Vite - hooks</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value</button><br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}  

export default App       