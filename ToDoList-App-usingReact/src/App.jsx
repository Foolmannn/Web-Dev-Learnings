import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  const [todo, settodo] = useState("");
  // const [todos,settodos]= useState([])
  const [todos, settodos] = useState(() => {
    let saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [showfinished, setshowfinished] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (e) => {
    let todoToEdit = todos.filter((item) => {
      return item.id === e.target.id;
    });
    // console.log(todoToEdit)
    settodo(todoToEdit[0].todo);
    let id = e.target.id;
    // console.log(id);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
  };

  const handleDelete = (e) => {
    confirm("Do you want to delete this todo..");
    let id = e.target.id;
    // console.log(id);
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });

    settodos(newtodos);
  };
  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
  };
  // console.log(todos);
  // const handleCheckbox = (e) => {
  //   let id =e.target.id;
  //   let index = todos.findIndex(item=>{
  //     return item.id === id;
  //   })
  //   let newtodos= todos;
  //   newtodos[index].isCompleted=!newtodos[index].isCompleted;
  // }
  const handleCheckbox = (e) => {
    let id = e.target.id;

    let newtodos = todos.map((item) => {
      if (item.id == id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });

    settodos(newtodos);
  };

  const togglefinished = (e) => {
    setshowfinished(!showfinished);
  };

  return (
    <>
      <Navbar />
    <div className="main bg-violet-200 mb-5 p-4 sm:p-6 md:p-8 rounded-xl mx-auto min-h-[80vh] w-full sm:w-[90%] md:w-3/4">
        <div className="addtodo my-5  text-black  ">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Add New Todo</h1>

<div className="flex flex-col sm:flex-row gap-3 mt-3">
  <input
    onChange={handleChange}
    value={todo}
    type="text"
    className="w-full sm:w-2/3 h-10 text-base sm:text-xl font-bold bg-bg rounded border-0 px-2"
  />

  <button
    onClick={handleAdd}
    disabled={todo.length < 5}
    className="font-bold bg-primary-dark py-2 px-4 rounded-md hover:bg-primary text-white disabled:bg-warning w-full sm:w-auto"
  >
    Add
  </button>
</div>
        </div>
      <div className="mini flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className=" text-black font-bold text-2xl ">Your Todos</h2>
          {/* <input
            type="checkbox"
            onChange={togglefinished}
            checked={showfinished}
            className="w-6 "
            /> */}
          <div className="px-10 gap-5  ">
            <span className="font-bold text-2xl ">Show Finished</span>
            <div className=" inline p-7 ">
              <div class="relative inline-block w-11 h-5 ">
                <input
                  type="checkbox"
                  onChange={togglefinished}
                  checked={showfinished}
                  id="switch"
                  class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-blue-600 cursor-pointer transition-colors duration-300"
                />
                <label
                  for="switch"
                  class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-blue-600 cursor-pointer"
                ></label>
              </div>
            </div>
          </div>
        </div>
        <div className="todos">
          {todos.length === 0 && (
            <div className="m-4 font-bold text-3xl text-danger">
              No Todos to display
            </div>
          )}
          {todos.map((items) => {
            return (
              (showfinished || !items.isCompleted) && (
            <div className="todo py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full " key={items.todo}>
             <div className="flex items-center gap-3 min-w-0 w-full">
                  <input
                    checked={items.isCompleted}
                    onChange={handleCheckbox}
                    type="checkbox"
                    className="w-6 "
                    value={items.isCompleted}
                    id={items.id}
                    />
<div
  className={`${items.isCompleted ? "bg-success" : "bg-danger"} font-bold rounded-md p-2 text-white break-words whitespace-normal overflow-hidden max-w-full`}
>
  {items.todo}
</div>
                    </div>
                  {/* this is how to add the conditons and normal css classes we need to usethe template  strings  */}
               <div className="btns flex gap-2 sm:gap-3">
                    <button
                      onClick={handleEdit}
                      className="edit font-bold  bg-primary-dark  py-1  px-3 rounded-md hover:bg-primary  cursor-pointer  text-white "
                      id={items.id}
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={handleDelete}
                      className="delete font-bold  bg-primary-dark py-1  px-3 rounded-md hover:bg-primary cursor-pointer  text-white "
                      id={items.id}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}
