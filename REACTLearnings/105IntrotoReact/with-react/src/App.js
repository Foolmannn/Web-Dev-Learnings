// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar"; // this import navbar.js
import Footer from "./components/Footer";


function App() {
  const [value, setValue] = useState(0); // here value is vairable and setValue will be set by some event or logic

  return (
    <div className="App">
      {/* as class is reserved OOP of the js so className isused in react as react app uses the js to parse the html like looking code which we are currently using   */}
      {/* In this return html code the js is parsed using the { } ie everthing inside the { } is parsed as the js values or variables  */}

      <Navbar logoText={"FoolMann"}/> 
      {/* this is how you include components and pass the props */}
      {/* <navbar/> ::::: Your problem happens because React components must start with a capital letter. Right now you imported and used navbar in lowercase, so React treats it like a normal HTML tag, not a component. */}
      <div className="value">{value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click Me
      </button>
      {/* <h1>Hello </h1> */}
      <Footer contactNo={9874523475}/>
    </div>
  );
}

export default App;
