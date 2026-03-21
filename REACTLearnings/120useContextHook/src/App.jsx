import { useState } from 'react'

import './App.css'
import App1 from './components/App1'
import App2 from './components/App2'

function App() {

  return (
    <>
<App1/>
<br></br>
<p>This uses the useContext </p>
<App2/>

    </>
  )
}

export default App
