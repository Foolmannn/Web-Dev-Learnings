https://redux-toolkit.js.org/tutorials/quick-start

// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux

React Redux is one of those things that feels confusing at first—but once you see the flow, it becomes very logical. I’ll break it down step by step so you actually *understand it*, not just memorize it.

---

# 🧠 What is React Redux?

**Redux** is a **state management library**.

👉 It helps you manage **global state** (data shared across components).

Instead of passing props like this:

```
App → Parent → Child → DeepChild 😩
```

Redux lets you do:

```
Component → directly access global state 😎
```

---

# ⚙️ Core Concepts of Redux

There are 3 main parts:

### 1. Store 🏪

The **central place** where all your state lives.

```js
const store = configureStore({
  reducer: counterReducer
});
```

---

### 2. Actions 🎯

Actions are **plain objects** that describe *what happened*.

```js
{ type: "increment" }
{ type: "decrement" }
{ type: "add", payload: 5 }
```

---

### 3. Reducer 🔄

A **function** that updates state based on the action.

```js
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };

    case "decrement":
      return { value: state.value - 1 };

    default:
      return state;
  }
}
```

---

# 🔁 Redux Flow (VERY IMPORTANT)

This is the heart of Redux:

```
UI → dispatch(action) → reducer → store updates → UI re-renders
```

Step-by-step:

1. User clicks button
2. Component **dispatches an action**
3. Reducer handles the action
4. Store updates
5. UI automatically updates

---

# ⚛️ React + Redux (How they connect)

To use Redux in React, we use:

👉 React Redux

---

# 🧩 Modern Redux (Using Redux Toolkit)

Today, we don’t write Redux the old way.

We use:

👉 Redux Toolkit

It simplifies everything.

---

# 🚀 Step-by-Step Setup

## 1. Install

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 2. Create a Slice (Reducer + Actions together)

```js
// features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    add: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, add } = counterSlice.actions;
export default counterSlice.reducer;
```

👉 Notice:

* No switch-case
* We "mutate" state (but internally it's immutable using Immer)

---

## 3. Create Store

```js
// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

## 4. Provide Store to React

```js
// main.jsx or index.js
import { Provider } from "react-redux";
import { store } from "./app/store";

<Provider store={store}>
  <App />
</Provider>
```

---

## 5. Use in Components

### 📥 Read State → `useSelector`

```js
import { useSelector } from "react-redux";

const count = useSelector((state) => state.counter.value);
```

---

### 📤 Send Actions → `useDispatch`

```js
import { useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const dispatch = useDispatch();

<button onClick={() => dispatch(increment())}>+</button>
<button onClick={() => dispatch(decrement())}>-</button>
```

---

# 🧠 Key Hooks Summary

| Hook          | Purpose             |
| ------------- | ------------------- |
| `useSelector` | Get data from store |
| `useDispatch` | Send actions        |

---

# 📦 When Should You Use Redux?

Use Redux when:

✅ Many components need same data
✅ State is complex (auth, todos, API data)
✅ App is growing large

Avoid Redux when:

❌ Small apps
❌ Simple state (use `useState` / `useContext` instead)

---

# 🔥 Example Use Cases

* Todo App (your current project 👀)
* Authentication (login/logout)
* Shopping cart
* Dashboard data (graphs, analytics)

---

# ⚠️ Common Beginner Mistakes

❌ Mutating state manually (outside toolkit)
❌ Not structuring slices properly
❌ Overusing Redux for small apps
❌ Forgetting Provider

---

# 🧩 Mental Model (Best Way to Remember)

Think of Redux like a bank:

* Store = Bank vault 💰
* Action = Request slip 🧾
* Reducer = Bank employee 🧑‍💼
* Dispatch = Submitting request

---
