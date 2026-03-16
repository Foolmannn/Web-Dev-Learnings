**Event Handling in React** means responding to user actions like clicking a button, typing in an input box, submitting a form, hovering over elements, etc. React handles events in a way similar to JavaScript but with a few differences.

---

# 1. Basic Idea of Event Handling

In React, you attach **event handlers** to JSX elements using **camelCase**.

Example events:

* `onClick`
* `onChange`
* `onSubmit`
* `onMouseOver`
* `onKeyDown`

Example:

```jsx
function App() {

  const handleClick = () => {
    alert("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default App;
```

Explanation:

* `handleClick` is a function.
* `onClick={handleClick}` tells React to run the function when the button is clicked.

---

# 2. Inline Event Handling

You can also write the function directly inside JSX.

```jsx
<button onClick={() => alert("Hello!")}>
  Click Me
</button>
```

But for larger logic, using a **separate function** is better.

---

# 3. Passing Arguments to Event Handlers

If you want to send a value to the function:

```jsx
function App() {

  const greet = (name) => {
    alert("Hello " + name);
  }

  return (
    <button onClick={() => greet("Suman")}>
      Greet
    </button>
  );
}
```

---

# 4. Handling Input Events

React often handles form inputs using `onChange`.

```jsx
import { useState } from "react";

function App() {

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>Your name: {name}</p>
    </>
  );
}
```

Explanation:

* `event.target.value` gets the value from the input field.
* `setName()` updates the state.

---

# 5. Form Submit Event

```jsx
function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

Important:
`e.preventDefault()` stops the page from refreshing.

---

# 6. Multiple Events Example

```jsx
function App() {

  const handleMouse = () => {
    console.log("Mouse Over");
  }

  const handleClick = () => {
    console.log("Clicked");
  }

  return (
    <div>
      <button onClick={handleClick} onMouseOver={handleMouse}>
        Hover or Click
      </button>
    </div>
  );
}
```

---

# 7. Key Differences: React vs HTML Events

| HTML        | React       |
| ----------- | ----------- |
| onclick     | onClick     |
| onchange    | onChange    |
| onmouseover | onMouseOver |

React uses **camelCase**.

---

# 8. Real Example (Counter)

```jsx
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;
```

When the button is clicked:

* `increase()` runs
* state updates
* React **re-renders UI**

---

💡 **Simple Rule**

```
User Action → Event Triggered → Function Runs → State Changes → UI Updates
```

---

**5 very important React event handling patterns developers use in real projects**

Great 👍 Since you’re learning React (and building projects like **ShopSathi**), these **5 important event handling patterns** are used in real React apps.

---

# 1. Updating State on Button Click

This is the **most common pattern**.

Example: Counter

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
    </>
  );
}
```

Flow:

```
Button Click → increase() → setCount() → UI updates
```

---

# 2. Toggle Event (Show / Hide)

Very common in **menus, modals, dropdowns**.

```jsx
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={toggle}>Toggle</button>

      {show && <p>Hello World</p>}
    </>
  );
}
```

If `show = true` → text appears
If `show = false` → text disappears

---

# 3. Handling Form Input

Used in **login forms, search bars, product forms**.

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>Name: {name}</p>
    </>
  );
}
```

Here:

```
User types → onChange event → handleChange() → state updates
```

---

# 4. Passing Parameters in Event

Used when clicking **specific items in a list**.

Example:

```jsx
function App() {

  const greet = (name) => {
    alert("Hello " + name);
  };

  return (
    <>
      <button onClick={() => greet("Suman")}>Click</button>
    </>
  );
}
```

Important:

❌ Wrong

```jsx
onClick={greet("Suman")}
```

✅ Correct

```jsx
onClick={() => greet("Suman")}
```

Because the arrow function prevents immediate execution.

---

# 5. Handling Form Submit

Very common in **login, signup, search forms**.

```jsx
function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

`preventDefault()` stops page refresh.

---

# Real World Example (Mini Shop Feature)

Imagine **Add to Cart button** in your ShopSathi app:

```jsx
function Product() {

  const addToCart = (product) => {
    console.log(product + " added to cart");
  };

  return (
    <>
      <button onClick={() => addToCart("Laptop")}>
        Add to Cart
      </button>
    </>
  );
}
```

Click → product name sent → cart updated.

---

# 6. Event Object in React

React automatically sends an **event object**.

```jsx
const handleClick = (e) => {
  console.log(e);
};
```

You can access:

```
e.target
e.target.value
e.preventDefault()
```

---

# Summary

| Event       | Usage          |
| ----------- | -------------- |
| onClick     | Button click   |
| onChange    | Input typing   |
| onSubmit    | Form submit    |
| onMouseOver | Hover          |
| onKeyDown   | Keyboard press |

---

✅ If you want, I can also show you **3 advanced React event patterns developers use**:

1️⃣ **Event handling in lists (important for product lists)**
2️⃣ **Event handling with `useRef`**
3️⃣ **Event delegation in React**

These are **very useful for real projects** like **ShopSathi**.

