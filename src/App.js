import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import { useDebugValue, useEffect, useRef, useState } from 'react';

function App() {

  const ref = useRef("");
  
  const [state, setState] = useState(false);

  useEffect(() => {
   console.log("state changed to..." + state) 
  },[state])

  function handleClick() {
    ref.current.focus();
  }


  return (
    <div className="App">
      <Greet />
      <Welcome />
      <input ref={ref} type='text' placeholder='Enter a number'></input>
      <button onClick={handleClick}>Click me</button>
      {state && <h1>Showbtn is {state}</h1>}
      <button onClick={() => setState(!state)}>Toggle Button</button>
    </div>
  );
}

export default App;
