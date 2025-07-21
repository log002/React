import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if(counter < 20){
      counter = counter + 1
      setCounter(counter)
    }
  }
  const subValue = () => {
    if(counter > 0){
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value: {counter}</h2>
      <button 
      onClick={addValue}
      >Increase Value {counter}</button>
      <br /><br />
      <button 
      onClick={subValue}
      >Decrease Value {counter}</button>
    </>
  )
}

export default App
