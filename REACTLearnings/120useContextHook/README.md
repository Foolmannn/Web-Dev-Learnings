Alright—let’s go **deep** into `useContext` so you can actually *use it properly in real apps* (like your todo project).

---

# 🔹 What is `useContext`?

👉 `useContext` is a React hook that lets you **access shared/global data** without passing props manually at every level.

---

# 🧠 The Problem (Props Drilling)

Without context:

```jsx
<App user={user}>
  <Navbar user={user}>
    <Profile user={user} />
  </Navbar>
</App>
```

😩 You’re passing `user` through components that don’t even need it.

---

# ✅ The Solution: Context API + `useContext`

You create a **global data store** and access it anywhere.

---

# 🔧 Step-by-Step Implementation

---

## 1️⃣ Create Context

```jsx
import { createContext } from "react";

const UserContext = createContext();
```

👉 This creates a “data container”

---

## 2️⃣ Provide Context

```jsx
function App() {
  const user = "Suman";

  return (
    <UserContext.Provider value={user}>
      <Navbar />
    </UserContext.Provider>
  );
}
```

👉 `value` = the data you want to share

---

## 3️⃣ Consume Context

```jsx
import { useContext } from "react";

function Profile() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}
```

---

# 🔥 That’s the Core Idea

> Wrap → Provide → Consume

---

# 🧠 Important Concepts (VERY IMPORTANT)

---

## 🔹 1. Context is NOT a replacement for state

Wrong thinking:

> “I’ll store everything in context”

❌ No.

👉 Context = **sharing mechanism**, not state management

---

## 🔹 2. Context causes re-renders

When value changes:

```jsx
<UserContext.Provider value={user}>
```

👉 ALL components using this context will re-render

---

## 🔹 3. Value identity matters

```jsx
<UserContext.Provider value={{ user }}>
```

⚠️ This creates a new object every render → triggers re-renders

---

### ✅ Fix with `useMemo`

```jsx
const value = useMemo(() => ({ user }), [user]);

<UserContext.Provider value={value}>
```

---

# 🧠 Real Example (Todo App — VERY USEFUL)

---

## 🔧 Create Context

```jsx
const TodoContext = createContext();
```

---

## 🔧 Provider Component

```jsx
import { useState } from "react";

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos(prev => [...prev, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    setTodos(prev =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
```

---

## 🔧 Wrap Your App

```jsx
function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}
```

---

## 🔧 Use Anywhere

```jsx
function TodoList() {
  const { todos, toggleTodo } = useContext(TodoContext);

  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            onChange={() => toggleTodo(index)}
          />
          {todo.text}
        </div>
      ))}
    </>
  );
}
```

---

# ⚠️ Common Mistakes

---

## ❌ 1. Using context without provider

```jsx
const value = useContext(UserContext);
```

👉 If no provider → `undefined`

---

## ❌ 2. Overusing context

Bad idea:

* Every state in context

👉 Leads to:

* unnecessary re-renders
* hard debugging

---

## ❌ 3. Large context objects

```jsx
value={{ todos, user, theme, settings }}
```

👉 Every change re-renders everything

---

### ✅ Better approach:

Split contexts:

```jsx
UserContext
TodoContext
ThemeContext
```

---

# ⚖️ When to Use `useContext`

---

## ✅ Use it for:

* Auth (logged-in user)
* Theme (dark/light)
* Global app state (todos, cart)
* Language settings

---

## ❌ Avoid it for:

* Frequently changing state (like input typing)
* Local component state

---

# 🧠 Advanced Pattern (Custom Hook)

Cleaner usage 👇

```jsx
const useTodos = () => {
  return useContext(TodoContext);
};
```

Now:

```jsx
const { todos } = useTodos();
```

---

# 🔥 Pro Optimization (IMPORTANT)

Combine with:

### 👉 `useMemo` (for value)

### 👉 `useCallback` (for functions)

```jsx
const addTodo = useCallback((text) => {
  setTodos(prev => [...prev, { text, completed: false }]);
}, []);

const value = useMemo(() => ({
  todos,
  addTodo
}), [todos, addTodo]);
```

---

# 🧩 Mental Model

👉 Context = “Global props”

---

# 🚀 Final Summary

* `createContext()` → create container
* `Provider` → give data
* `useContext()` → access data
* Avoid overuse
* Optimize with `useMemo` & `useCallback`

---

If you want next level:
👉 I can refactor your current todo app to use **Context + backend (DB)** properly
👉 Or show you **Zustand vs Context (modern approach)**
