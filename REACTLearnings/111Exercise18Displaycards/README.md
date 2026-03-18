You have to use an api and display the data in the form of a card under a container. All the data points reurned bu the API should be converted to a card 

Use this API : https://jsonplaceholder.typicode.com/

Hint:  

Errors Solutions:
It looks like you're running into a classic React "gotcha." Directly pushing data into a variable like `let users = []` inside a component won't work because React **re-renders** the entire function whenever state changes, wiping out your local variables.

To fix this, you need to store that API data in **State** and fetch it inside a **`useEffect`** hook to prevent the API call from running in an infinite loop.

---



### Why your original code wasn't working:

* **The Infinite Loop:** In your snippet, the `fetch` is sitting in the main body of the function. Every time the component renders, it fetches. If you were to update state inside that fetch, it would trigger a re-render, which would trigger another fetch... and so on.
* **State vs. Variables:** In React, standard variables (like `let users = []`) are "forgotten" every time the component updates. `useState` is the only way to make data "stick" between renders.
* **Asynchronous Timing:** When you `console.log(users)` right after a fetch call, it will often show as empty because the code doesn't wait for the API to finish before moving to the next line. Using State handles this timing for you.

### Key Tips for the Future:

1. **Always use `useEffect**` for side effects like API calls.
2. **Always use `.map()**` to display arrays in your JSX.
3. **Always include a `key**` (like `user.id`) when rendering lists so React can stay organized.

**Would you like me to show you how to add a "Search" filter to this user list now that the data is in state?**

Nice, this is a **very important React pattern** (fetching data + state + effects). I’ll walk you through it **line by line in a simple way** 👇

---

### 🔹 Imports

```js
import { useState, useEffect } from "react";
```

* `useState` → lets you **store data (state)** inside the component
* `useEffect` → lets you **run code after rendering** (like API calls)

```js
import "./App.css";
```

* Imports CSS file to style this component

---

### 🔹 Component Definition

```js
function App() {
```

* This is a **React functional component**
* It returns UI (JSX)

---

### 🔹 State Variables

```js
const [users, setUsers] = useState([]);
```

* `users` → stores list of users
* `setUsers` → function to update it
* `useState([])` → initial value is **empty array**

👉 Why array? Because API returns a **list of users**

---

```js
const [loading, setLoading] = useState(true);
```

* `loading` → tracks if data is being fetched
* Starts as `true` (because fetch hasn't completed yet)

---

### 🔹 useEffect (API Call)

```js
useEffect(() => {
```

* Runs **after the component renders**
* Used here to fetch data

---

```js
fetch("https://jsonplaceholder.typicode.com/users")
```

* Calls API to get user data

---

```js
.then((response) => response.json())
```

* Converts API response into **JSON format**

---

```js
.then((data) => {
```

* `data` = actual user data from API

---

```js
setUsers(data);
```

* Stores fetched data into `users` state

---

```js
setLoading(false);
```

* Data is loaded → stop showing loading message

---

```js
})
```

* Ends `.then()` block

---

```js
.catch((error) => console.error("Error fetching users:", error));
```

* Handles errors if API fails

---

```js
}, []);
```

* **VERY IMPORTANT**
* Empty array `[]` means:
  👉 Run this effect **only once when component mounts**

---

### 🔹 Return UI

```js
return (
```

* JSX starts here

---

```js
<div className="container">
```

* Main wrapper div

---

```js
<h1>User List</h1>
```

* Title

---

### 🔹 Conditional Rendering

```js
{loading ? (
  <p>Loading...</p>
) : (
```

* If `loading === true` → show `"Loading..."`
* Else → show user list

---

### 🔹 Display Users

```js
<ul>
  {users.map((user) => (
```

* Loop through `users` array
* `map()` creates list items

---

```js
<li key={user.id}>{user.name}</li>
```

* Each user shown as list item
* `key={user.id}` → required by React for performance
* Displays **user name**

---

```js
))}
</ul>
```

* Ends loop and list

---

```js
)}
```

* Ends conditional rendering

---

```js
</div>
```

* Ends main div

---

```js
);
```

* Ends JSX

---

### 🔹 Export

```js
export default App;
```

* Makes this component usable in other files

---

## 🔥 Flow Summary (Very Important)

1. Component loads
2. `useEffect` runs
3. API is called
4. Data is stored in `users`
5. `loading` becomes false
6. UI updates → shows user list

---

## 🧠 Key Concepts You Just Used

* `useState` → store data
* `useEffect` → side effects (API calls)
* `fetch` → get data
* `map()` → loop in JSX
* conditional rendering (`? :`)

---


