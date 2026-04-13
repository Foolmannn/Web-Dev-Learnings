Middleware in Next.js is a way to run code **before a request is completed**—basically *intercepting requests* and deciding what to do with them.

Middleware is renamed to proxy.js in NextJs due to confusion with the middleware of the express


Think of it like a **gatekeeper** 🚪:

* Request comes in
* Middleware checks/modifies it
* Then allows, blocks, or redirects

---

# 🔥 What is Middleware?

Middleware runs:

* **before a page/API is served**
* at the **edge (fast execution layer)**

---

# ⚙️ Basic Example

Create a file:

```
middleware.js
```

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Request received:", request.nextUrl.pathname);

  return NextResponse.next(); // continue request
}
```

---

# 🚦 Common Use Cases

### 1. Authentication (Most Important)

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

👉 Protect routes like `/dashboard`

---

### 2. Redirects

```javascript
if (request.nextUrl.pathname === "/old-page") {
  return NextResponse.redirect(new URL("/new-page", request.url));
}
```

---

### 3. URL Rewriting

```javascript
return NextResponse.rewrite(new URL("/api/data", request.url));
```

👉 Changes route internally without changing URL

---

### 4. Headers & Cookies

```javascript
const response = NextResponse.next();
response.cookies.set("user", "Suman");
return response;
```

---

# 🧠 How Middleware Works Internally

Flow:

```
Request → Middleware → Route/Page → Response
```

* Runs **before rendering**
* Can **modify request/response**
* Runs on **Edge Runtime (fast, lightweight)**

---

# 📍 Matching Specific Routes

You can control where middleware runs:

```javascript
export const config = {
  matcher: ["/dashboard/:path*", "/profile"]
};
```

👉 Middleware only runs on these routes

---

# ⚠️ Important Rules

### 1. Runs at Edge

* No heavy Node.js APIs
* No filesystem access

### 2. Keep it Lightweight

* Should be fast (no heavy DB queries)

### 3. Global by Default

* Applies to all routes unless restricted

---

# 🆚 Middleware vs Server Actions

| Feature  | Middleware               | Server Actions |
| -------- | ------------------------ | -------------- |
| Runs     | Before request           | On user action |
| Purpose  | Auth, routing, redirects | Data mutation  |
| Location | Edge                     | Server         |
| Trigger  | Every request            | Form/button    |

---

# 💡 Real-World Example (Protected Dashboard)

```javascript
export function middleware(request) {
  const token = request.cookies.get("token");

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

---

# 🧠 Interview Tip

> Middleware in Next.js is used to intercept requests at the edge and perform operations like authentication, redirects, rewrites, and header manipulation before the request reaches the route.

---
✅ Show **JWT auth using middleware (real project setup)**
✅ Explain **Edge runtime vs Node runtime (important concept)**
✅ Combine **Middleware + Server Actions in one app**
