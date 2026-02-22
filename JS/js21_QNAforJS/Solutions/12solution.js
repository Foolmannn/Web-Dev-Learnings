
// 12. The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiresInSeconds) {
    const expirationTime = Date.now() + expiresInSeconds * 1000;

    const tokenObject = {
        token,
        expiresAt: expirationTime
    };

    localStorage.setItem("authToken", JSON.stringify(tokenObject));
}

function getAuthToken() {
    const stored = localStorage.getItem("authToken");

    if (!stored) return null;

    const tokenObject = JSON.parse(stored);

    if (Date.now() > tokenObject.expiresAt) {
        localStorage.removeItem("authToken");
        return null;
    }

    return tokenObject.token;
}


/*
Excellent 🔐 this is a very real-world concept — **token storage + expiration handling** (used in JWT authentication systems).

We’ll build it properly and explain:

* What is localStorage
* How expiration works
* Why tokens need expiry
* How to store & check expiration

---

# 🧠 First: What Is localStorage?

`localStorage` is a browser storage system that:

* Stores data as key–value pairs
* Persists even after page refresh
* Only stores strings

Example:

```javascript
localStorage.setItem("name", "Suman");
```

---

# 🎯 Goal

We want:

```javascript
setAuthToken(token, expirationTime);
```

And it should:

* Store the token
* Store expiration timestamp
* Automatically expire after some time

---

# ✅ Basic Implementation

```javascript
function setAuthToken(token, expiresInSeconds) {
    
    const expirationTime = Date.now() + (expiresInSeconds * 1000);

    const tokenObject = {
        token: token,
        expiresAt: expirationTime
    };

    localStorage.setItem("authToken", JSON.stringify(tokenObject));
}
```

---

# 🧠 Explanation Line-by-Line

---

## 1️⃣ `Date.now()`

```javascript
Date.now()
```

Returns current time in milliseconds.

Example:

```
1708600000000
```

---

## 2️⃣ Calculate Expiration

```javascript
Date.now() + (expiresInSeconds * 1000)
```

If expiresInSeconds = 3600 (1 hour)

We add 3600 * 1000 ms.

---

## 3️⃣ Why Use JSON.stringify?

localStorage only stores **strings**.

So we convert object to string:

```javascript
JSON.stringify(tokenObject)
```

---

# 🔹 Example Usage

```javascript
setAuthToken("abc123token", 3600); // expires in 1 hour
```

Now localStorage contains:

```json
{
  "token": "abc123token",
  "expiresAt": 1708603600000
}
```

---

# 🚀 Now We Also Need: getAuthToken()

Because storing is not enough.

We must check expiration when retrieving.

```javascript
function getAuthToken() {

    const stored = localStorage.getItem("authToken");

    if (!stored) return null;

    const tokenObject = JSON.parse(stored);

    if (Date.now() > tokenObject.expiresAt) {
        localStorage.removeItem("authToken");
        return null;
    }

    return tokenObject.token;
}
```

---

# 🧠 How Expiration Check Works

```javascript
if (Date.now() > tokenObject.expiresAt)
```

If current time is greater → token expired.

So we:

* Remove token
* Return null

---

# 🔥 Why Expiration Is Important

Without expiration:

* Stolen tokens work forever ❌
* Security risk
* Users stay logged in permanently

Real systems:

* Access token (short life)
* Refresh token (longer life)

---

# 🛡 Real-World JWT Example (Backend)

Backend sends:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600
}
```

Frontend calls:

```javascript
setAuthToken(response.token, response.expiresIn);
```

---

# 🎯 What This Question Tests

| Concept          | Meaning                    |
| ---------------- | -------------------------- |
| localStorage     | Persistent browser storage |
| JSON.stringify   | Convert object to string   |
| JSON.parse       | Convert back to object     |
| Date.now()       | Get current timestamp      |
| Expiration logic | Security control           |

---

# 🏁 Final Combined Version

```javascript
function setAuthToken(token, expiresInSeconds) {
    const expirationTime = Date.now() + expiresInSeconds * 1000;

    const tokenObject = {
        token,
        expiresAt: expirationTime
    };

    localStorage.setItem("authToken", JSON.stringify(tokenObject));
}

function getAuthToken() {
    const stored = localStorage.getItem("authToken");

    if (!stored) return null;

    const tokenObject = JSON.parse(stored);

    if (Date.now() > tokenObject.expiresAt) {
        localStorage.removeItem("authToken");
        return null;
    }

    return tokenObject.token;
}
```

---

# 🔥 Advanced Concept (Interview Level)

localStorage is vulnerable to:

* XSS attacks

Better production practice:

* Store token in **HttpOnly cookies**
* Not accessible via JavaScript

---

If you want next, I can explain:

* Difference between localStorage, sessionStorage, cookies
* How JWT actually works internally
* How to auto-logout user when token expires
* Or connect this with your PHP login system 🔐



*/