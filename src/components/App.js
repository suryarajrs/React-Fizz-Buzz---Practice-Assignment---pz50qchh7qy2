import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [counter, setCounter]=useState(1)

  
  return (
    <div id="main">
      <button onClick={()=>{setCounter((prev)=>prev+1)}} id='increment'>Increment</button>
      <div  className={(counter%5==0 && counter%3==0)?("fizzbuzz"):(counter%3==0)?("fizz"):(counter%5==0)?("buzz"):("normal") } id="counter">{counter}</div>
      <button onClick={()=>{setCounter((prev)=>prev-1)}} id='decrement'>Decrement</button>

    </div>
  )
}


export default App;
