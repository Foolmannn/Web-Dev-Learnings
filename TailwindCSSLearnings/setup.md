IN Latest tailwind we need to ::



With **Tailwind CSS v4**, the setup is **different from v3**. The command `npx tailwindcss init` is **removed**, so you must set it up in a new way.

Below are the **correct steps using Tailwind v4 from scratch** after your folder is created.

---

# 1️⃣ Go to Your Project Folder

Open terminal in:

```
F:\Web Dev Learnings\TailwindCSSLearnings\98IntrotoTailwind
```

---

# 2️⃣ Initialize npm

```bash
npm init -y
```

This creates:

```
package.json
```

---

# 3️⃣ Install Tailwind v4

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```


3️⃣ Install Tailwind CSS CLI (important)

Install Tailwind and the CLI plugin:

npm install tailwindcss @tailwindcss/cli
Packages installed:

* Tailwind
* PostCSS plugin for Tailwind

---

# 4️⃣ Create PostCSS Config

Create a file:

```
postcss.config.js
```

Write:

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

---

# 5️⃣ Create CSS File

Create:

```
styles.css
```

Write:

```css
@import "tailwindcss";
```

This **replaces the old v3 directives**:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# 6️⃣ Create HTML File

Create:

```
index.html
```

Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind v4 Test</title>
  <link rel="stylesheet" href="output.css">
</head>

<body class="bg-gray-100 flex justify-center items-center h-screen">

<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
Click Me
</button>

</body>
</html>
```

---

# 7️⃣ Build Tailwind CSS

Run:

```bash
npx tailwindcss -i ./styles.css -o ./output.css --watch
```
We can add in package.json scripts section: 
```
  "scripts": {

    "build": "npx tailwindcss -i ./styles.css -o ./output.css --watch" 
  }
```
This create a shortcut for no need of remembering 
```
npm run build 
```
This creates:

```
output.css
```

---

# 8️⃣ Final Folder Structure

Your project should look like this:

```
98IntrotoTailwind
│
├── node_modules
├── package.json
├── package-lock.json
├── postcss.config.js
│
├── styles.css
├── output.css
└── index.html
```

---

# 9️⃣ Run the Project

Keep this running in terminal:

```bash
npx tailwindcss -i ./styles.css -o ./output.css --watch
```

Open **index.html** in the browser.

If the **button is blue and centered**, Tailwind is working.

---

💡 **Important change in Tailwind v4**

| Tailwind v3                           | Tailwind v4                           |
| ------------------------------------- | ------------------------------------- |
| `tailwind.config.js` required         | optional                              |
| `@tailwind base/components/utilities` | replaced with `@import "tailwindcss"` |
| `npx tailwindcss init`                | removed                               |

---

✅ If you want, I can also show you:

* **The easiest Tailwind v4 setup used by developers (much simpler)**
* **How Tailwind v4 is 5x faster than v3 internally**
* **How to build a full Tailwind landing page step-by-step**.
