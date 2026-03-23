Perfect — let’s properly add a **real chart using Recharts** to your Home page.

I’ll give you a **clean, working setup** 👇

---

# 🚀 1. Install Recharts

Run this in your project:

```bash
npm install recharts
```

---

# 🧠 2. What we’ll build

On your **Home page**, you’ll get:

* 📊 Pie Chart → Completed vs Pending
* 📈 Progress Bar (optional but nice)
* 📦 Stats cards

---

# ✅ 3. Full `Home.jsx` with Recharts

Replace your current `Home.jsx` with this:

```jsx
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

  const data = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending }
  ];

  const COLORS = ["#22c55e", "#ef4444"]; // green, red

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">Your Progress 📊</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-8">
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

      {/* Pie Chart */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
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

    </div>
  );
}

export default Home;
```

---

# 🎯 What you get

* ✅ Responsive chart
* ✅ Live data from todos
* ✅ Clean UI
* ✅ Works with your current setup

---

# ⚠️ Important Note

Right now:

* Home reads from `localStorage`
* So it updates **only when page reloads**

---

# 🚀 Next Upgrade (VERY IMPORTANT)

To make it **live update instantly**, you should:

👉 Move todos to:

* React Context OR
* Backend (Express + DB)

---

# 🔥 Optional Upgrades

I can help you add:

### 📊 Bar Chart (daily tasks)

### 🔥 Productivity streak

### 📅 Weekly analytics

### 🌙 Dark mode dashboard

---
