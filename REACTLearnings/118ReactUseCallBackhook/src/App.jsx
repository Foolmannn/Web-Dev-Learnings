import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState("good")

  // const getAdjective=() => {
  //   return setadjective("another")
  // }
  // This function causes the navbar to reender although using the memo as the on each render the function is lost and react thinks new function initialization . ie navbar think new props is being changed 

  
  // const getAdjective=useCallback(() => {
  //   return "another" 
  // },[])
  // This functions is freezed using the callback so the no rerendering of the Navbar occurs . 
  // const getAdjective=() => {
  //   return "another" + count
  // }
   // in this the function is being chaned so the navbar is also being rerendered 
  //    const getAdjective=useCallback(() => {
  //   return "another" + count
  // },[])
  // this doesnot update the another0 
       const getAdjective=useCallback(() => {
    return "another" + count
  },[count])

  // this changes when the count changes so the navbar rerender as the new propos is being sends . 

  return (
    <>
    <Navbar adjective={"good"} getAdjective={getAdjective}/>
   <div className="count">
    <button onClick={()=>setCount((count)=>count+1)}>Count is {count}</button>
   </div>
   </>
  )
}

export default App
