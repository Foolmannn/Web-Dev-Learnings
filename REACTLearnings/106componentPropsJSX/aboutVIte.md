# ⚡ Introduction to Vite

**Vite** (pronounced **“veet”**, French for *quick*) is a **modern frontend build tool** used to develop web applications faster. It is mainly used with frameworks like **React**, **Vue.js**, and **Svelte**, but it also works with plain HTML, CSS, and JavaScript.

It was created by **Evan You** (the creator of Vue).


https://vite.dev/guide/
---

# 🚀 Why Vite Was Created

Older tools like **Webpack** bundle the entire project before running the development server.
This makes startup **slow for large projects**.

**Vite solves this problem by:**

* Using **native ES modules in the browser**
* Only compiling files **when they are needed**

Result 👉 **Extremely fast development server**

---

# ⚙️ How Vite Works

Vite has **two main modes**.

## 1️⃣ Development Mode

* Uses **native ES modules**
* No heavy bundling
* Files are served instantly

Example:

```js
import "./style.css"
import { sum } from "./math.js"
```

The browser loads modules **directly**.

### Benefit

⚡ Instant server start
⚡ Fast hot reload

---

## 2️⃣ Production Build

When deploying the app, Vite bundles everything using **Rollup**.

This optimizes the app by:

* Minifying code
* Tree shaking
* Bundling assets

Result 👉 **Small and optimized production files**

---

# 🔥 Key Features of Vite

### 1️⃣ Lightning Fast Dev Server

Starts almost instantly.

### 2️⃣ Hot Module Replacement (HMR)

When you edit code, only the changed module reloads.

Example:
Change a React component → only that component reloads.

---

### 3️⃣ Framework Support

Vite works with many frameworks:

* React
* Vue.js
* Svelte
* Lit

---

### 4️⃣ Built-in Features

Vite supports:

* TypeScript
* CSS preprocessors
* JSX
* PostCSS
* Asset imports

Without extra configuration.

---

# 📂 Basic Vite Project Structure

```
my-vite-app
│
├── index.html
├── package.json
├── vite.config.js
│
├── src
│   ├── main.js
│   ├── App.jsx
│   └── style.css
│
└── node_modules
```

Important file:

### `vite.config.js`

Configuration file.

Example:

```js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000
  }
})
```

---

# 🛠️ How to Create a Vite Project

Step 1:

```bash
npm create vite@latest
```

Step 2:

```bash
cd my-project
```

Step 3:

```bash
npm install
```

Step 4:

```bash
npm run dev
```

The dev server starts:

```
http://localhost:5173
```

---

# ⚡ Vite vs Webpack

| Feature    | Vite               | Webpack |
| ---------- | ------------------ | ------- |
| Startup    | Instant            | Slow    |
| Dev Server | Very Fast          | Slow    |
| Bundling   | Only in production | Always  |
| Config     | Simple             | Complex |

---

# 💡 Example Vite App

```html
<!DOCTYPE html>
<html>
<head>
  <title>Vite App</title>
</head>
<body>

<h1>Hello Vite</h1>

<script type="module" src="/src/main.js"></script>

</body>
</html>
```

---

# 🧠 Simple Explanation

Think of **Vite like a restaurant** 🍔

Old tools (Webpack):

* Cook **all food first**
* Then serve customers

Vite:

* Cook **only the food ordered**
* Serve instantly

Result 👉 **Much faster**

---

✅ **In short:**
**Vite = Super fast frontend development tool**

---


