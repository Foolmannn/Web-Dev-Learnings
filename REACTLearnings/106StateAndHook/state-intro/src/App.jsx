import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// https://react.dev/reference/react/hooks


function App() {
  const [count, setCount] = useState(2) 
  // usestate() is the react builtin HOOKS 
  // // here count is the state variable and 2 is the initial state of the count and setcount is the function which can alter the  state of the count 
  let a=5;
  

  return (
    <>
      <div>
        The count is : {count}
        The count is : {a}
        <div>
          
        <button onClick={()=>{
          setCount(count**2)
        }}>Update Count</button>
        <button onClick={()=>{
          setCount(a**2)
        }}>Update Count</button>
        {/* this update updates the value of the a but cannot render the new a value in the page so the usestate will update the count each time in every page the count is use when the state is updated  */}
        </div>
        
      </div>
    </>
  )
}

export default App
