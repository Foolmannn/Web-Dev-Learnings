**Server Actions in Next.js** are a modern way to run server-side logic *directly from your components*—without needing traditional API routes.

They were introduced with the App Router and are tightly integrated with **React Server Components**.

---

# 🔥 What are Server Actions?

A **Server Action** is simply a function that runs on the **server**, but you can call it from your UI (forms, buttons, etc.).

Instead of:

* Creating `/api/...` routes
* Sending fetch requests

You just:
👉 define a function
👉 call it directly from your component

---

# ⚙️ Basic Example

```javascript
// app/actions.js
"use server";

export async function addUser(formData) {
  const name = formData.get("name");

  // You can access DB here
  console.log("User:", name);
}
```

### Use it in a component:

```javascript
import { addUser } from "./actions";

export default function Page() {
  return (
    <form action={addUser}>
      <input name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

✅ When the form is submitted:

* It **directly calls the server function**
* No API route needed

---

# 🧠 How it Works (Behind the Scenes)

* `"use server"` tells Next.js → run this on the server
* The function is serialized and invoked securely
* Form data is automatically passed
* Works with **React Server Components**

---

# 🚀 Why Use Server Actions?

### 1. No API Routes Needed

Cleaner code, fewer files

### 2. Better Performance

* No extra HTTP requests
* Faster than fetch-based APIs

### 3. Full Server Access

Inside the action, you can:

* Access databases
* Use secrets (env variables)
* Perform authentication

---

# 🧩 Example with Database (Real Use Case)

```javascript
"use server";

import { db } from "@/lib/db";

export async function createPost(formData) {
  const title = formData.get("title");

  await db.post.create({
    data: { title }
  });
}
```

---

# 🔄 Calling Server Actions Manually

You can also call them from buttons:

```javascript
"use client";

import { deletePost } from "./actions";

export default function DeleteButton({ id }) {
  return (
    <button onClick={() => deletePost(id)}>
      Delete
    </button>
  );
}
```

---

# ⚠️ Important Rules

### 1. Must use `"use server"`

At the top of the function/file

### 2. Only runs on server

You cannot use:

* `window`
* `document`

### 3. Serializable arguments only

Pass simple data (no complex objects like functions)

---

# 🆚 Server Actions vs API Routes

| Feature     | Server Actions   | API Routes             |
| ----------- | ---------------- | ---------------------- |
| Setup       | Simple           | More boilerplate       |
| Performance | Faster           | Slower (extra request) |
| Use case    | Forms, mutations | Public APIs            |
| Flexibility | Limited          | Full control           |

---

# 💡 When SHOULD you use them?

Use Server Actions when:

* Handling **form submissions**
* Doing **CRUD operations**
* Updating DB directly from UI

---

# ❌ When NOT to use them?

Avoid when:

* Building a **public API**
* Need **external access**
* Complex backend logic shared across apps

---

# 🧠 Pro Tip (Important for Exams & Interviews)

> Server Actions = "Server-side functions directly callable from UI without API routes"

---

