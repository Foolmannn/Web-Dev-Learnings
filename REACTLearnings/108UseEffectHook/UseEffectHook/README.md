## 🔄 `useEffect` Hook in React

`useEffect` is one of the most important **Hooks** in React.
It lets you run **side effects** inside functional components.

---

# 1️⃣ What is a Side Effect?

A **side effect** is anything that happens **outside the normal rendering of the UI**.

Examples:

* Fetching data from an API
* Setting timers
* Updating the DOM manually
* Subscribing to events
* Logging data
* Local storage operations

These tasks should not run directly inside the component body.

Instead, React provides **`useEffect`**.

---

# 2️⃣ Basic Syntax

```jsx
import { useEffect } from "react";

useEffect(() => {
  // code to run
}, []);
```

Structure:

```text
useEffect(effectFunction, dependencyArray)
```

* **effectFunction** → code to execute
* **dependencyArray** → controls when it runs

---

# 3️⃣ Example: Run Once When Component Loads

```jsx
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h1>Hello</h1>;
}
```

### Explanation

The empty dependency array:

```js
[]
```

means:

```
Run the effect only once when the component mounts
```

This behaves like **componentDidMount** from older React class components.

---

# 4️⃣ Example: Run When State Changes

```jsx
import { useState, useEffect } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
```

Now the effect runs **every time `count` changes**.

---

# 5️⃣ Example: Run on Every Render

```jsx
useEffect(() => {
  console.log("Runs every render");
});
```

No dependency array → runs **after every render**.

Flow:

```
Render → useEffect runs
Render → useEffect runs again
```

---

# 6️⃣ Cleanup Function in useEffect

Some effects require **cleanup**.

Example:

* removing event listeners
* clearing intervals
* unsubscribing

### Example

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

Flow:

```
Component Mount → Start interval
Component Unmount → Clear interval
```

---

# 7️⃣ Real Example: API Fetch

```jsx
import { useEffect, useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

Here `useEffect`:

```
Component loads
↓
Fetch API
↓
Update state
↓
UI updates
```

---

# 8️⃣ Dependency Array Rules

| Dependency | Effect Behavior         |
| ---------- | ----------------------- |
| `[]`       | Run once (on mount)     |
| `[value]`  | Run when value changes  |
| `[a, b]`   | Run when a or b changes |
| no array   | Run every render        |

---

# 9️⃣ Common Mistake Beginners Make

❌ Infinite Loop

```jsx
useEffect(() => {
  setCount(count + 1);
});
```

Why?

```
setCount → render → useEffect → setCount → render → infinite loop
```

---

# 🔟 Visual Flow

```
Component Render
        ↓
React paints UI
        ↓
useEffect runs
        ↓
Side effect happens
```

Important rule:

**`useEffect` runs AFTER the component renders.**

---

# 11️⃣ When You Should Use useEffect

Use it when you need:

✔ API calls
✔ Timers
✔ Event listeners
✔ DOM operations
✔ Data synchronization

---

# 12️⃣ When NOT to Use useEffect

Don't use it for:

❌ simple calculations
❌ derived values

Example:

```jsx
const total = price * quantity;
```

No `useEffect` needed.

---

# 🧠 Mental Model

Think of `useEffect` like:

```
"After React updates the UI, run this code"
```

---

✅ **Summary**

| Concept   | Meaning                      |
| --------- | ---------------------------- |
| useEffect | Runs side effects            |
| []        | run once                     |
| [state]   | run when state changes       |
| cleanup   | runs when component unmounts |

---

