Dynamic routes in Next.js let you create pages based on variable data (like IDs, slugs, usernames, etc.)—super useful for blogs, products, user profiles, etc.

---
https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes

# 🚀 What are Dynamic Routes?

Instead of fixed paths like:

```
/about
/contact
```

You can create flexible routes like:

```
/blog/my-first-post
/blog/learn-nextjs
/user/suman
```

---

# 📁 How to Create Dynamic Routes (App Router)

In Next.js (App Router), you use **square brackets `[]`**.

### Example:

```
app/blog/[slug]/page.js
```

Here, `[slug]` is a dynamic parameter.

---

# 🧠 Accessing the Dynamic Parameter

```javascript
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>;
}
```

👉 If user visits:

```
/blog/hello-world
```

👉 Output:

```
Post: hello-world
```

---

# 📦 Multiple Dynamic Routes

```
app/product/[category]/[id]/page.js
```

```javascript
export default function Product({ params }) {
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <h2>ID: {params.id}</h2>
    </div>
  );
}
```

---

# 🔁 Catch-All Routes

Use `[...slug]` when you don’t know how many segments will come.

### Example:

```
app/docs/[...slug]/page.js
```

URL:

```
/docs/react/hooks/useEffect
```

```javascript
export default function Docs({ params }) {
  return <div>{params.slug.join(" / ")}</div>;
}
```

👉 Output:

```
react / hooks / useEffect
```

---

# ❓ Optional Catch-All Routes

Use `[[...slug]]` if the route is optional.

```
app/docs/[[...slug]]/page.js
```

Works for:

```
/docs
/docs/react
```

---

# ⚡ Static Generation with Dynamic Routes

You can pre-generate pages using:

```javascript
export async function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
  ];
}
```

---

# 🔐 Use Case Examples

* Blog posts → `/blog/[slug]`
* Products → `/product/[id]`
* Users → `/user/[username]`
* Docs → `/docs/[...slug]`

---

# ⚠️ Common Mistakes

* ❌ Forgetting folder name `[slug]`
* ❌ Using `useRouter()` in server components
* ❌ Not handling undefined params in optional routes

---

# 🧩 Pages Router (Old Way)

If you're using older structure:

```
pages/blog/[slug].js
```

```javascript
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  return <h1>{router.query.slug}</h1>;
};
```

---

# 🧠 Quick Summary

* `[param]` → single dynamic route
* `[...param]` → catch-all
* `[[...param]]` → optional catch-all
* Access via `params`

---
# For custom not found page we can:
https://nextjs.org/docs/app/api-reference/file-conventions/not-found


# For custom error page we can:
https://nextjs.org/docs/app/api-reference/file-conventions/error