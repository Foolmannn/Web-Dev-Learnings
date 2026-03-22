https://react-hook-form.com/

# Without using the library the form handling is tidious as show:

``` jsx
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

```

# So we use the react hook form library which simplifies the task 

Nice — **React Hook Form** is a big upgrade over normal `useState` forms. It’s faster, cleaner, and scales really well (especially for your projects like todo or ShopSathi).

---

# 🔹 1. Install React Hook Form

```bash
npm install react-hook-form
```

---

# 🔹 2. Basic Example

```jsx
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input {...register("email")} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
```

---

# 🔹 3. What’s Happening (Important)

## ✅ `useForm()`

```js
const { register, handleSubmit } = useForm();
```

* `register` → connects input to form
* `handleSubmit` → handles submit + validation

---

## ✅ `register()`

```jsx
<input {...register("name")} />
```

👉 This replaces:

```jsx
value + onChange + useState ❌
```

React Hook Form uses **uncontrolled inputs internally**, so it's faster.

---

## ✅ handleSubmit

```js
<form onSubmit={handleSubmit(onSubmit)}>
```

👉 It:

* prevents reload
* collects data
* runs validation

---

# 🔹 4. Validation Example

```jsx
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email"
          }
        })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

# 🔹 5. Example for YOUR Todo App

This is how you should use it 👇

```jsx
import { useForm } from "react-hook-form";

function TodoForm({ setTodos }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setTodos(prev => [
      ...prev,
      { text: data.task, completed: false }
    ]);

    reset(); // clears input
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("task", { required: true })}
        placeholder="Enter task"
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
```

---

# 🔥 Why React Hook Form is Better

| Normal React Form | React Hook Form       |
| ----------------- | --------------------- |
| useState needed   | ❌ Not needed          |
| re-renders often  | ✅ minimal re-renders  |
| more boilerplate  | ✅ clean & short       |
| harder validation | ✅ built-in validation |

---

# ⚡ Pro Tips

* Use `reset()` to clear form
* Use `defaultValues` for editing forms
* Use `watch()` if you need live values

---
