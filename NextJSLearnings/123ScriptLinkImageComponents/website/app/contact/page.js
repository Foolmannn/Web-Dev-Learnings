import React from 'react'
import Script from 'next/script'
//Script components helps us to use the javascript in a page 

const contact = () => {
  return (
    <div>
        <script>{`alert("Welcome to Contact Page ")`}</script>
      This is contact 
    </div>
  )
}

export default contact
