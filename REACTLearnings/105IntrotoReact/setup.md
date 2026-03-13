## We can use the create react app utility to quickly create the react app

Using command
```
npx create-react-app with-react

```
Here with-react is the folder where you want your react project


#OR simply use:
Since you already use **Node.js, Express, Tailwind, and MongoDB** in your learning projects, the easiest modern way to start **React** is using **Vite**. It is faster and simpler than **Create React App**.

Below is the **step-by-step setup from zero**.

---

# 1️⃣ Install Node.js (if not installed)

React requires **Node.js**.

Check installation:

```bash
node -v
npm -v
```

Example output:

```
v20.x.x
10.x.x
```

If not installed → download from
[https://nodejs.org](https://nodejs.org)

---

# 2️⃣ Create a React Project

Open **terminal / PowerShell** and run:

```bash
npm create vite@latest
```

You will see prompts:

```
Project name: my-react-app
Framework: React
Variant: JavaScript
```

---

# 3️⃣ Enter the Project Folder

```bash
cd my-react-app
```

---

# 4️⃣ Install Dependencies

Run:

```bash
npm install
```

This installs all packages from **package.json**.

---

# 5️⃣ Start the Development Server

Run:

```bash
npm run dev
```

Output example:

```
VITE v5.x.x ready in 300 ms

Local: http://localhost:5173/
```

Open the browser and visit:

```
http://localhost:5173
```

Your **React app is now running 🚀**

---

# 6️⃣ Project Structure

Your folder will look like this:

```
my-react-app
│
├── node_modules
├── public
│
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── index.html
├── package.json
└── vite.config.js
```

---

# 7️⃣ Important Files

### main.jsx

Entry point of React.

```javascript
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

### App.jsx

Main component.

```javascript
function App() {
  return (
    <>
      <h1>Hello React 🚀</h1>
      <p>My first React app</p>
    </>
  )
}

export default App
```

---

# 8️⃣ Create Your First Component

Create folder:

```
src/components
```

Create file:

```
Navbar.jsx
```

Example:

```javascript
function Navbar(){
  return <h2>This is Navbar</h2>
}

export default Navbar
```

Use it in **App.jsx**:

```javascript
import Navbar from "./components/Navbar"

function App(){
  return (
    <>
      <Navbar />
      <h1>Hello React</h1>
    </>
  )
}
```

---

# 9️⃣ Installing Extra Packages

Example: install **React Router**

```bash
npm install react-router-dom
```

Example: install **Tailwind CSS**

```bash
npm install tailwindcss @tailwindcss/vite
```

---

# 🔟 React Development Workflow

Typical workflow:

```
Create Component
      ↓
Import Component
      ↓
Use JSX
      ↓
Add State / Hooks
      ↓
Build UI
```

---

# 11️⃣ Build React App (for production)

When your project is finished:

```bash
npm run build
```

It creates:

```
dist/
```

This folder can be deployed on servers.

---

# 12️⃣ Running React With Express (Later)

Since you are learning **Express**, a common stack is:

```
Frontend
   React

Backend
   Express

Database
   MongoDB
```

React calls API like:

```
http://localhost:3000/api/products
```

---

✅ Now your React environment is ready.

---

If you want, I can also show you (these will help you a lot):

1️⃣ **React + Tailwind setup (latest v4)**
2️⃣ **React folder structure used in real companies**
3️⃣ **10 React concepts every beginner must learn**
4️⃣ **React + Express + MongoDB full project**


