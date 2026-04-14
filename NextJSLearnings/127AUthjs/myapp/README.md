**Auth.js** (previously known as **NextAuth.js**) is a modern authentication library for JavaScript applications—especially popular with **Next.js**, but it also works with other frameworks.

---

## 🔐 What is Auth.js?

Auth.js is a flexible authentication solution that helps you add login systems to your app quickly and securely.

It supports:

* Email/password login
* OAuth (Google, GitHub, etc.)
* Passwordless login (magic links)
* Sessions & JWT handling

---

## 🚀 Key Features

* ✅ Easy integration with Next.js
* ✅ Built-in providers (Google, GitHub, Facebook, etc.)
* ✅ Secure session handling (JWT or database)
* ✅ Works with databases like MongoDB, PostgreSQL
* ✅ Server-side & client-side authentication

---

## 📦 Installation (Next.js App)

```bash
npm install next-auth
```

---

## ⚙️ Basic Setup (Next.js App Router)

Create file:
`/app/api/auth/[...nextauth]/route.js`

```javascript
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
```

---

## 🔑 Add Environment Variables

Create `.env.local`:

```env
GITHUB_ID=your_client_id
GITHUB_SECRET=your_client_secret
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

---

## 🧑‍💻 Use in Frontend

### Sign In / Sign Out

```javascript
import { signIn, signOut } from "next-auth/react";

<button onClick={() => signIn()}>Sign In</button>
<button onClick={() => signOut()}>Sign Out</button>
```

---

### Get Session (Client Side)

```javascript
import { useSession } from "next-auth/react";

const { data: session } = useSession();

if (session) {
  console.log(session.user);
}
```

---

## 🧠 How It Works (Simple Flow)

1. User clicks login
2. Auth.js redirects to provider (e.g., GitHub)
3. User authenticates
4. Auth.js stores session (JWT or DB)
5. You access session anywhere in app

---

## 🔄 Auth.js vs NextAuth.js

* **NextAuth.js** → old name
* **Auth.js** → new ecosystem (more flexible, framework-agnostic)

---

## 🧩 When Should You Use It?

Use Auth.js if:

* You are building a **Next.js app**
* You need **quick OAuth login**
* You don’t want to build auth from scratch

---

## ⚠️ Common Beginner Mistakes

* Forgetting `NEXTAUTH_SECRET`
* Wrong callback URL in OAuth provider
* Not wrapping app with `SessionProvider`

---

## 📌 Bonus: Wrap App with Provider

```javascript
"use client";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
```

---


