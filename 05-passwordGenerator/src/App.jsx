import { useState ,useCallback} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  const passwordGenerator = () =>{
    
  }
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password generator</h1>
    </>
  )
}

export default App