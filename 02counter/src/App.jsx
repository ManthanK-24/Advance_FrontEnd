import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);

  //let counter = 5;
  const addValue = () =>{
    //counter = counter + 1;
    if(counter<=19)
    {
      setCounter(counter=>counter+1);
      // setCounter(counter=>counter+1);

      // setCounter(counter+1);
      // setCounter(counter+1);
      
    }
  
    
  }
  const subValue = () => {
    if(counter>=1)
    {
    setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>React is an amazing Library</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
      >Increase value: {counter} </button>
      <br/>
      <button
      onClick={subValue}>Decrease value:{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
