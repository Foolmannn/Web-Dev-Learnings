https://nextjs.org/docs/app/api-reference/file-conventions/route


In Next.js, **API** means you can build your **backend inside the same project** — no need for a separate Express server (though you still can use one).

Let’s go step-by-step from basics → internals → real-world usage 👇

---

# 🔥 1. What is an API in Next.js?

An API in Next.js is:

> A **server-side function** that runs on the backend and handles requests (GET, POST, etc.)

👉 Similar to routes in Express.js

---

# 📁 2. Where APIs Live (VERY IMPORTANT)

## ✅ App Router (Modern - Next.js 13+)

```
app/api/users/route.js
```

---

## ✅ Pages Router (Older)

```
pages/api/users.js
```

---

# ⚙️ 3. Basic API Example (App Router)

### 📁 File: `app/api/hello/route.js`

```js
export async function GET(request) {
  return Response.json({
    message: "Hello from Next.js API!"
  });
}
```

---

### 📌 How to call it

```js
fetch("/api/hello")
```

👉 Runs on:

```
http://localhost:3000/api/hello
```

---

# 🔄 4. HTTP Methods (App Router)

You can define multiple methods in same file:

```js
export async function GET() {
  return Response.json({ message: "GET request" });
}

export async function POST(request) {
  const body = await request.json();
  return Response.json({ received: body });
}

export async function DELETE() {
  return Response.json({ message: "Deleted" });
}
```

---

# 🧠 5. How It Works Internally

### 🧩 Request Flow

```text
Client (browser)
     ↓
Request → /api/hello
     ↓
Next.js Server (Node.js runtime)
     ↓
Route Handler executes
     ↓
Response returned (JSON)
```

---

### ⚡ Behind the scenes

* Next.js creates a **serverless function**
* Each API route = separate function
* Runs on:

  * Node.js OR Edge Runtime

---

### 🔥 Important Insight

👉 Your API is **not bundled into frontend JS**

* Runs securely on server
* Can access:

  * Database
  * Environment variables
  * Secrets

---

# 🧾 6. Working with Request & Response

## 📌 Request Object

```js
export async function POST(request) {
  const body = await request.json();
  console.log(body);
}
```

---

## 📌 Query Params

```js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  return Response.json({ name });
}
```

---

## 📌 Headers

```js
export async function GET(request) {
  const headers = request.headers;
  return Response.json({
    userAgent: headers.get("user-agent")
  });
}
```

---

# 🔐 7. Connecting Database (Real Use Case)

Example with MongoDB:

```js
import { connectDB } from "@/lib/db";

export async function GET() {
  await connectDB();
  
  const users = await User.find();
  
  return Response.json(users);
}
```

---

# 🔥 8. Dynamic API Routes

```
app/api/users/[id]/route.js
```

---

### Example:

```js
export async function GET(request, { params }) {
  return Response.json({
    userId: params.id
  });
}
```

👉 URL:

```
/api/users/123
```

---

# ⚡ 9. Edge vs Node Runtime

## 🟢 Edge Runtime

```js
export const runtime = "edge";
```

* Runs closer to user (CDN)
* Faster
* Limited APIs

---

## 🔵 Node Runtime (default)

* Full Node.js support
* Better for DB, heavy logic

---

# 🚀 10. Middleware + API

You can intercept API calls using middleware:

```js
export function middleware(request) {
  console.log("API called");
}
```

---

# 🔥 11. Real Example (Full Flow)

```js
// app/api/todos/route.js

export async function GET() {
  return Response.json([
    { id: 1, text: "Learn Next.js" }
  ]);
}

export async function POST(request) {
  const body = await request.json();

  return Response.json({
    success: true,
    todo: body
  });
}
```

---

### Frontend Call

```js
const res = await fetch("/api/todos", {
  method: "POST",
  body: JSON.stringify({ text: "New Todo" })
});
```

---

# 🧠 12. Internal Architecture (Deep Insight)

```text
Frontend (React)
     ↓
fetch("/api/...")
     ↓
Next.js API Layer
     ↓
Route Handler (server function)
     ↓
Database / Logic
     ↓
Response.json()
     ↓
Back to frontend
```

---

# ⚖️ Next.js API vs Express

| Feature     | Next.js API | Express         |
| ----------- | ----------- | --------------- |
| Setup       | Built-in    | Separate server |
| Deployment  | Serverless  | Custom server   |
| Scaling     | Automatic   | Manual          |
| Flexibility | Medium      | High            |

---

# 🎯 Final Understanding

👉 Next.js API = **Backend inside frontend project**

Use it for:

* Authentication
* Database operations
* Form handling
* Custom logic

---

# 🔥 Pro Tip

If you're building:

* Small/medium apps → use Next.js API
* Large microservices → combine with Express.js or other backend

---

