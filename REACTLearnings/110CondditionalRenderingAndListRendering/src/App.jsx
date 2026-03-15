import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);

  //     const Todo = ()=>{
  //   return(<>
  //   <div className="todo">I am todo</div>
  //  </>)}
  // this is how we can create small components without creating separate file as comonents are just functions

  //list in react

  const [todos, settodos] = useState([
    {
      title: "Hello this is title1",
      desc: "THis is first todo",
    },
    {
      title: "Hello this is title2",
      desc: "THis is second todo",
    },
    {
      title: "Hello this is title3",
      desc: "THis is third todo",
    },
  ]);

  //  const Todo = ({todo})=>{
  //   return(<>
  //   <div className="m-4 border-1">

  //  <div className='todo'>{todo.title} </div>
  //  <div className='todo'>{todo.desc} </div>
  //   </div>
  //  </>)}

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 className="border-1 ">Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
          {/* {showbtn?<button>Show btn is true </button>: "Show btn is false"} */}
          {/* if we want use the if else then above can be used or for simple true conditional rendering we can use below instead of ternary operator  */}
          {showbtn && (
            <button>I will be shown when second button is clicked </button>
          )}
          {/* // this means if true then run  */}
        </div>
        <button className="counter" onClick={() => setshowbtn(!showbtn)}>
          {/* this altenate the boolean value of showbtn  */}
          Count is {count}
        </button>
      </section>
      <div className="todo white">
        {/* <Todo /> */}

        {/* to render the list in react js */}
        {todos.map((todo) => {
          // return <Todo key={todo.title} todo={todo} />
          // better way is to ::
          return (
              <div key={todo.title} className="m-4 border-1">
                <div className="todo">{todo.title} </div>
                <div className="todo">{todo.desc} </div>
              </div>
          
          )
        })}
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
