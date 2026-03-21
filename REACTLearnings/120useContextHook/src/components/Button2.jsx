import React, { useContext } from 'react'
import Component2 from './Component2'
import { counterContext } from '../context/context'


const Button2 = () => {
    const value =useContext(counterContext)
  return (
    <div>
<button onClick={()=>value.setCount((count) =>count =1)}>
    <span>  <  Component2  /> </span>
       This is the button.  

</button>
    </div>
  )
}

export default Button2
 