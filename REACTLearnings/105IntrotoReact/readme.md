## ⚛️ React – Detailed Beginner to Intermediate Guide

React is one of the most popular **JavaScript libraries for building user interfaces**, especially **single-page applications (SPAs)**.

It was created by **Meta Platforms (Facebook)** and is widely used in modern web development.

---

## 1. What React Is

React is a **JavaScript library** that helps developers build **fast and interactive UI components**.

Instead of manipulating the DOM directly, React uses a **component-based approach**.

Example websites built using React:

* **Netflix**
* **Instagram**
* **Airbnb**
* **WhatsApp (web)**

---

# 2. Why React is Used

### 1️⃣ Component Based Architecture

UI is broken into **reusable pieces called components**.

Example:

```
App
 ├── Navbar
 ├── Sidebar
 ├── ProductCard
 └── Footer
```

Each part is a **separate reusable component**.

---

### 2️⃣ Virtual DOM (Fast Performance)

Normal DOM updates are **slow**.

React creates a **Virtual DOM**:

Process:

```
User Action
   ↓
React updates Virtual DOM
   ↓
React compares with previous DOM (Diffing)
   ↓
Only changed part updates in Real DOM
```

This makes React **very fast**.

---

### 3️⃣ Reusability

Example:

```
<ProductCard />
<ProductCard />
<ProductCard />
```

You write the component **once** and reuse it multiple times.

---

# 3. React Architecture

```
Browser
   ↓
React Application
   ↓
Components
   ↓
State & Props
   ↓
Virtual DOM
   ↓
Real DOM
```

---

# 4. Installing React (Modern Method)

React projects are usually created using **Vite** or **Create React App**.

### Using Vite (Recommended)

```bash
npm create vite@latest my-app
```

Select

```
React
```

Then:

```bash
cd my-app
npm install
npm run dev
```

---

# 5. React Folder Structure

Example project:

```
my-app
│
├── node_modules
├── public
│   └── index.html
│
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── components
│   │     └── Navbar.jsx
│   │     └── Card.jsx
│   │
│   └── styles
│
├── package.json
└── vite.config.js
```

---

# 6. JSX (JavaScript XML)

React uses **JSX**, which allows writing **HTML inside JavaScript**.

Example:

```jsx
function App() {
  return (
    <h1>Hello React</h1>
  )
}
```

JSX is converted to JavaScript using **Babel**.

---

# 7. React Components

A **component** is a reusable piece of UI.

### Example Component

```jsx
function Navbar(){
  return <h1>My Website</h1>
}
```

Usage:

```jsx
<Navbar />
```

---

# 8. Props (Passing Data)

Props are **data passed from parent to child components**.

Example:

Parent:

```jsx
<Product name="Laptop" price="1000" />
```

Child:

```jsx
function Product(props){
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  )
}
```

Output:

```
Laptop
1000
```

---

# 9. State in React

State stores **dynamic data that can change**.

React uses **Hooks** like `useState`.

Example:

```jsx
import { useState } from "react"

function Counter(){
  const [count,setCount] = useState(0)

  return(
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>
        Increase
      </button>
    </div>
  )
}
```

---

# 10. React Hooks

Hooks allow using **state and lifecycle features in functional components**.

Common hooks:

| Hook       | Use           |
| ---------- | ------------- |
| useState   | Manage state  |
| useEffect  | Side effects  |
| useRef     | Access DOM    |
| useContext | Global state  |
| useReducer | Complex state |

---

### Example: useEffect

```jsx
import { useEffect } from "react"

useEffect(()=>{
   console.log("Component Mounted")
},[])
```

Runs when component loads.

---

# 11. Event Handling

React events are similar to JavaScript.

Example:

```jsx
function App(){
  function handleClick(){
     alert("Button Clicked")
  }

  return(
     <button onClick={handleClick}>
        Click Me
     </button>
  )
}
```

---

# 12. Conditional Rendering

Show UI based on conditions.

Example:

```jsx
function App(){
  let loggedIn = true

  return(
     <div>
       {loggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
     </div>
  )
}
```

---

# 13. Lists in React

Rendering arrays using `.map()`.

Example:

```jsx
const fruits = ["Apple","Banana","Mango"]

function App(){
  return(
    <ul>
      {fruits.map((fruit)=>(
        <li>{fruit}</li>
      ))}
    </ul>
  )
}
```

---

# 14. React Router (Navigation)

For page navigation we use **React Router**.

Example pages:

```
Home
About
Contact
```

Install:

```bash
npm install react-router-dom
```

Example:

```jsx
import {BrowserRouter,Routes,Route} from "react-router-dom"
```

---

# 15. React vs Traditional JavaScript

| Feature     | JavaScript  | React           |
| ----------- | ----------- | --------------- |
| DOM updates | Manual      | Automatic       |
| Code reuse  | Difficult   | Easy            |
| Structure   | Unorganized | Component based |
| Performance | Slower      | Faster          |

---

# 16. React Ecosystem

React is usually used with:

| Tool             | Purpose                   |
| ---------------- | ------------------------- |
| **Redux**        | State management          |
| **Next.js**      | Fullstack React framework |
| **Tailwind CSS** | Styling                   |
| **Axios**        | API requests              |

---

# 17. Real World React App Flow

```
User
 ↓
Clicks Button
 ↓
Event Handler
 ↓
State Update
 ↓
Virtual DOM Update
 ↓
UI Re-render
```

---

# 18. Advantages of React

✅ Fast performance
✅ Reusable components
✅ Huge community
✅ Easy to learn
✅ SEO support (with Next.js)

---

# 19. Disadvantages

❌ Fast changing ecosystem
❌ Requires build tools
❌ JSX learning curve

---

# 20. Typical Tech Stack With React

Most modern apps use:

```
Frontend
   React + Tailwind

Backend
   Node.js + Express

Database
   MongoDB
```

Since you are already learning **Express and MongoDB**, React would be the **perfect frontend for your stack**.

---


