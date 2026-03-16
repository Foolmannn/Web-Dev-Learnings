import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Suman")
 // without this we cannot change the value  
 const [form, setform] = useState({name:"", phone:""})
// const handleChange = (e)=>{
//   setname(e.target.value) // it takes the value entered in the form and update the state with that new value
// }


// handling multiple inputs with the single function 
const handleChange = (e)=> {
  setform({...form,[e.target.name]:e.target.value}) // this  means in the form state the name of the input is 
  console.log(form) // this will console the incomplete input as the asynchronouse nature of the function serform 
}


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

{/* <input type="text" value={name} onChange={handleChange}/>  */}
{/* Wihout the onchange function we cannot enter the new value */}
<input type="text" name='name' value={form.name} onChange={handleChange}/>
<input type="text" name='phone' value={form.phone} onChange={handleChange}/>

  </>
  )
}

export default App
