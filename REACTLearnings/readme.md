## ⚛️ State and Hooks in React

In React, **State** and **Hooks** are core concepts used to make components **dynamic and interactive**.

---

# 1️⃣ What is State in React?

**State** is a **built-in object that stores data which can change over time** in a component.

When the **state changes, React automatically re-renders the component** to update the UI.

### Example Idea

Imagine a **counter**:

```
Count: 0
[Increase]
```

When you click the button, the number increases.
That number is stored in **state**.

---

## Example Code (State using Hook)

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default Counter;
```

### Explanation

```js
const [count, setCount] = useState(0);
```

* `count` → current state value
* `setCount` → function to update the state
* `0` → initial value

When `setCount()` runs:

```
State changes → React re-renders component → UI updates
```

---

# 2️⃣ What are Hooks in React?

**Hooks are special functions that let you use React features inside functional components.**

Before Hooks, React features like **state** were only available in **class components**.

Hooks allow functional components to use:

* state
* lifecycle methods
* context
* refs

---

## Common Hooks in React

### 1️⃣ `useState`

Used to **create and manage state**.

Example:

```js
const [name, setName] = useState("Suman");
```

---

### 2️⃣ `useEffect`

Used for **side effects** like:

* API calls
* timers
* event listeners

Example:

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Component Rendered");
}, []);
```

---

### 3️⃣ `useRef`

Used to **access DOM elements directly**.

Example:

```jsx
const inputRef = useRef();
```

---

### 4️⃣ `useContext`

Used to **share data across components** without props.

---

# 3️⃣ Why Hooks Are Important

Hooks make React code:

* simpler
* reusable
* easier to read

Example comparison:

### Without Hooks (Class Component)

```js
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
}
```

### With Hooks

```js
const [count, setCount] = useState(0);
```

Hooks are **much cleaner**.

---

# 4️⃣ Rules of Hooks

When using Hooks in React:

1️⃣ Only call hooks **at the top level**

❌ Wrong

```js
if (true) {
  useState(0);
}
```

---

2️⃣ Only call hooks **inside React functions**

✔️ Allowed in:

* React components
* Custom hooks

---

# 5️⃣ Simple Flow of State

```
User Action (Click)
        ↓
State Update
        ↓
React Re-renders Component
        ↓
UI Updates
```

---

# 6️⃣ Small Example

```jsx
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1 style={{ color: color }}>Hello</h1>
      <button onClick={() => setColor("blue")}>
        Change Color
      </button>
    </div>
  );
}
```

Clicking the button **updates the state → UI changes**.

---

✅ **In short**

| Concept | Meaning                                   |
| ------- | ----------------------------------------- |
| State   | Data that changes in a component          |
| Hooks   | Functions that let you use React features |

---



