The **`useRef` hook** in React is used to **persist values between renders** and to **directly access DOM elements** without causing a re-render.

It is one of the most useful hooks when working with inputs, timers, or storing mutable values.

https://react.dev/reference/react/useRef

---

# 1. What is `useRef`?

`useRef` creates a **reference object** that stays the same across renders.

```javascript
const refVariable = useRef(initialValue)
```

It returns an object like:

```javascript
{
  current: initialValue
}
```

You access or change the value using:

```javascript
refVariable.current
```

Important characteristics:

* It **does NOT trigger re-render**
* Value **persists between renders**
* Often used to **reference DOM elements**

---

# 2. Syntax

```javascript
import { useRef } from "react";

const myRef = useRef(initialValue);
```

Example:

```javascript
const countRef = useRef(0);
```

Here:

```
countRef.current = 0
```

---

# 3. Example 1 – Accessing a DOM Element

One common use is **accessing an input field directly**.

```javascript
import { useRef } from "react";

function App() {

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;
```

### How it works

1. `useRef(null)` creates a reference.
2. `ref={inputRef}` attaches it to the input.
3. `inputRef.current` becomes the **actual DOM element**.
4. We can call DOM methods like:

```
focus()
scrollIntoView()
value
```

---

# 4. Example 2 – Storing Values Without Re-render

Unlike `useState`, updating `useRef` **does not re-render the component**.

```javascript
import { useRef } from "react";

function App() {

  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };

  return (
    <div>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;
```

If you click the button:

```
1
2
3
4
```

But the UI will **not update** because `useRef` doesn't trigger rendering.

---

# 5. Example 3 – Tracking Previous Value

Very common interview example.

```javascript
import { useState, useRef, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCount.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
```

Output example:

```
Current: 3
Previous: 2
```

---

# 6. `useRef` vs `useState`

| Feature             | useRef | useState |
| ------------------- | ------ | -------- |
| Causes re-render    | ❌ No   | ✅ Yes    |
| Stores value        | ✅ Yes  | ✅ Yes    |
| Used for DOM access | ✅ Yes  | ❌ No     |
| Mutable             | ✅ Yes  | ❌ No     |

Example difference:

```javascript
ref.current = 5   // no re-render
setCount(5)       // re-render
```

---

# 7. Common Real-World Uses

### 1️⃣ Access DOM elements

```
input focus
scroll position
video control
```

Example:

```
videoRef.current.play()
```

---

### 2️⃣ Store timers

```javascript
const timerRef = useRef(null);

timerRef.current = setInterval(() => {
  console.log("running");
}, 1000);
```

---

### 3️⃣ Store previous values

Used with `useEffect`.

---

### 4️⃣ Avoid unnecessary re-renders

Useful for performance optimization.

---

# 8. Important Rules

1️⃣ Never modify ref inside render unnecessarily.

Bad:

```javascript
ref.current = value
```

Good:

```
useEffect()
event handlers
```

---

2️⃣ Ref changes **do not re-render UI**

If UI needs update → use **state**.

---

# 9. Simple Mental Model

Think of `useRef` like:

```
A box that remembers values between renders
but React does NOT watch it for changes.
```

---

✅ **Short Summary**

`useRef` is used for:

* Accessing **DOM elements**
* Storing **mutable values**
* Saving **previous state**
* Avoiding **unnecessary re-renders**

---

If you want, I can also explain:

* **`useRef vs useState vs useEffect` (very important for interviews)**
* **5 practical projects using useRef**
* **Advanced useRef patterns used by senior React developers**.
