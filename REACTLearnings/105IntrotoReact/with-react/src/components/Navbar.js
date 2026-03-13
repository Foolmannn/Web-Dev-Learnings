    //rafce snippets from extension to quickly create the react arrow function component export
    
    
    import React from 'react'
    
    const Navbar = (props) => {
      return (
        <div>
          <div className="logo">{props.logoText}</div> 
          {/* props are the variable passed in components  */}
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )
    }
    
    export default Navbar
    