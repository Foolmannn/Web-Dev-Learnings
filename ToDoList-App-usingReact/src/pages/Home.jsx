import { useEffect, useState } from "react";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let saved = localStorage.getItem("todos");
    setTodos(saved ? JSON.parse(saved) : []);
  }, []);

  const total = todos.length;
  const completed = todos.filter(t => t.isCompleted).length;
  const pending = total - completed;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h1 className="text-2xl font-bold mb-4">Your Progress 📊</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center mb-6">
        <div className="bg-blue-500 text-white p-4 rounded">
          Total
          <div className="text-xl font-bold">{total}</div>
        </div>

        <div className="bg-green-500 text-white p-4 rounded">
          Completed
          <div className="text-xl font-bold">{completed}</div>
        </div>

        <div className="bg-red-500 text-white p-4 rounded">
          Pending
          <div className="text-xl font-bold">{pending}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-300 rounded-full h-6 overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <div className="mt-2 text-center font-bold">
        {percent}% Completed
      </div>

    </div>
  );
}

export default Home;