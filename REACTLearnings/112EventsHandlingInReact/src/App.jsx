import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick= ()=>{
    alert("I am clicked");
  }
  const handlemouseover= ()=>{
    alert("I am mouse over ")
  }

  return (
  <>
<div className="button">
  <button onClick={handleClick}>Click Me</button>
</div>

<div className="red" onMouseOver={handlemouseover}>
  I am a red div . 
</div>

  </>
  )
}

export default App
