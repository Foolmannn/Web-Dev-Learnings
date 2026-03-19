import { useState } from "react";

import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  const [color, setColor] = useState("#ef4444"); // Starts as Red

  return (
    <>
        <Navbar />
      <div className="main bg-violet-200  my-5 p-5 rounded-xl mx-auto min-h-[80vh] ">
        <div className="addtodo text-black text-2xl ">
          <h1>Add New Todo</h1>
          <input type="text"className="bg-bg rounded "/>
          <button>Add</button>
        </div>
    
        <h2 className="bg text-black text-2xl ">Your Todos</h2>
        <div className="todos">
          <div className="todo flex gap-10 ">
            <div className="text ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, ad.</div>
            <button className="edit bg-primary-dark  px-3 rounded-md hover:bg-primary  cursor-pointer  text-white ">Edit</button>
            <button className="delete bg-primary-dark px-3 rounded-md hover:bg-primary cursor-pointer  text-white ">Delete</button>

          </div>
        </div>
      </div>
    </>
  );
}
