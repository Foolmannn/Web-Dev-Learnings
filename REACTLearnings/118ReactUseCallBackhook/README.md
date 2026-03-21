Both **`useContext`** and **`useCallback`** are important React hooks, but they solve very different problems. Since you're building apps like your todo project, understanding these clearly will help you write cleaner and more optimized code.

---

# 🔹 `useContext` (Sharing Data Without Props Drilling)

### 👉 Problem it solves:

Passing props deeply (parent → child → child → child…) gets messy.

### 👉 Solution:

`useContext` lets you share data globally (like theme, user, todos, auth state).

---

## ✅ Basic Flow:

1. Create a context
2. Provide it
3. Consume it

---

## 🧠 Example:

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Navbar />
    </ThemeContext.Provider>
  );
}

function Navbar() {
  return <Button />;
}

function Button() {
  const theme = useContext(ThemeContext);

  return <button>{theme} mode</button>;
}
```

---

## 💡 Real use cases:

* Auth (user logged in or not)
* Theme (dark/light)
* Global state (like your todo list)

---

# 🔹 `useCallback` (Performance Optimization)

### 👉 Problem it solves:

Functions are recreated on every render → causes unnecessary re-renders in child components.

### 👉 Solution:

`useCallback` memoizes (remembers) a function.

---

## 🧠 Syntax:

```jsx
const memoizedFunction = useCallback(() => {
  // logic
}, [dependencies]);
```

---

## 🧠 Example:

```jsx
import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
}

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
}
```

---

## 🔥 Why this matters:

Without `useCallback`:

* `handleClick` gets recreated every render
* `Child` re-renders unnecessarily

With `useCallback`:

* Same function reference → avoids re-render (when used with `React.memo`)

---

# ⚖️ Key Differences

| Feature  | useContext 🧩       | useCallback ⚡             |
| -------- | ------------------- | ------------------------- |
| Purpose  | Share data globally | Optimize performance      |
| Problem  | Props drilling      | Unnecessary re-renders    |
| Returns  | Context value       | Memoized function         |
| Use case | State sharing       | Stable function reference |

---

# 🚀 When YOU should use them (important)

### Use `useContext` when:

* You’re passing props more than 2–3 levels deep
* You have global data (like your todos, auth)

---

### Use `useCallback` when:

* Passing functions to child components
* Using `React.memo`
* Performance issues exist

⚠️ Don't overuse `useCallback` — it can make code complex without real benefit.

---

# 💡 Pro Tip (for your todo app)

You can combine both:

```jsx
const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, { text, completed: false }]);
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
```

Now any component can access:

```jsx
const { todos, addTodo } = useContext(TodoContext);
```

---

