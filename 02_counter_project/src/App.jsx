import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter = 5;
let  [counter, setcounter] = useState(5) // ---> counter is a variable and setCounter is a function
const addValue = () =>{
  counter = counter +1
  console.log("clicked", counter);
  setcounter(counter)
}

const removeValue  = () =>{
  setcounter(counter -1)
}

  return (
    <>

    <h1>Sushil Kumar</h1>
    <h2>Counter Value : {counter}</h2>
    <button
    onClick={addValue}>Add Number{counter}</button>
    <br />
    <button onClick={removeValue}>Remove Number {counter}</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App
