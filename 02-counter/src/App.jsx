import { useState } from 'react'

import './App.css'

function App() {
 
  let [counter,setCounter] = useState(15);

  // let counter = 5;
  const addValue = () => {
    if(counter<20){
      counter = counter + 1;
    }
    
    setCounter(counter);
    // console.log("clicked", counter);
  };

  const remValue = ()=>{
    if(counter>0) setCounter(counter-1);
    // console.log("clicked",counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={remValue}>Remove value {counter}</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App
