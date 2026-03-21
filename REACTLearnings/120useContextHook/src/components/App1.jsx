import { useState } from 'react'

import Navbar1 from './Navbar1'


function App1() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar1 count={count}/>


    {/* 
    here the heiarchy is :
  App.jsx
    Navbar.jsx
        Button.jsx
            component1.jsx */}

      <button onClick={()=>setCount((count)=>count+1)}>Count is {count}</button>
    </>
  )
}

export default App1
