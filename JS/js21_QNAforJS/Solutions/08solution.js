// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// Function that returns a promise which resolves after 500ms
function delayMultiply(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    });
}

// Async function that maps array to promises
async function asyncArrayMapping(arr) {
    return arr.map(num => delayMultiply(num));
}

// Example usage
const numbers = [1, 2, 3, 4];

asyncArrayMapping(numbers).then(result => {
    console.log(result); 
    // Output: [Promise, Promise, Promise, Promise]
});
async function getResolvedValues(arr) {
    const promises = await asyncArrayMapping(arr);
    const results = await Promise.all(promises);
    return results;
}

getResolvedValues(numbers).then(result => {
    console.log(result); 
    // Output after 500ms: [2, 4, 6, 8]
});
/*


# 1️⃣ What Is Asynchronous JavaScript?

JavaScript is **single-threaded** → it runs one thing at a time.

But some operations (like:

* `setTimeout`
* API calls
* Database requests
* File reading

) take time.

Instead of blocking the program, JavaScript uses **asynchronous behavior** so other code can run while waiting.

---

# 2️⃣ What Is a Promise?

A **Promise** represents a value that will be available in the future.

It has 3 states:

* 🟡 **Pending** → waiting
* 🟢 **Resolved** → success
* 🔴 **Rejected** → failed

Example:

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done!");
    }, 1000);
});
```

Here:

* Promise starts as **pending**
* After 1 second → becomes **resolved**
* Value becomes `"Done!"`

---

# 3️⃣ Why Do We Need a Promise Here?

The question says:

> multiply each number by 2 **after a delay of 500ms**

Since `setTimeout` is asynchronous, we must wrap it in a **Promise** to return the result later.

Without Promise, we cannot return the delayed result properly.

---

# 4️⃣ Understanding This Function

```javascript
function delayMultiply(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    });
}
```

### What happens here?

Step-by-step:

1. Function is called → `delayMultiply(5)`
2. It immediately returns a **Promise**
3. After 500ms → `resolve(5 * 2)`
4. Promise becomes resolved with value `10`

Important:
👉 The function does NOT return `10` immediately.
👉 It returns a **Promise object**.

---

# 5️⃣ What Does `map()` Do Normally?

Normal synchronous example:

```javascript
const arr = [1,2,3];
const result = arr.map(num => num * 2);

console.log(result); // [2,4,6]
```

`map()` immediately returns a new array.

---

# 6️⃣ What Happens When We Use Async Inside map?

```javascript
const result = arr.map(num => delayMultiply(num));
```

Now each `delayMultiply(num)` returns a **Promise**.

So `map()` returns:

```javascript
[Promise, Promise, Promise]
```

NOT the final values.

Because map itself is **synchronous**.
It does not wait.

---

# 7️⃣ Why Promise.all() Is Needed

To wait for ALL promises to finish:

```javascript
const promises = arr.map(num => delayMultiply(num));

Promise.all(promises).then(results => {
    console.log(results);
});
```

### What `Promise.all()` does:

* Takes array of promises
* Waits for ALL to resolve
* Returns a single Promise
* Gives final resolved array

Result after 500ms:

```javascript
[2, 4, 6]
```

---

# 8️⃣ Where async/await Comes In

`async` makes a function return a Promise automatically.

`await` pauses inside async function until Promise resolves.

Example:

```javascript
async function getResults(arr) {
    const promises = arr.map(num => delayMultiply(num));
    const results = await Promise.all(promises);
    return results;
}
```

Now:

```javascript
getResults([1,2,3]).then(console.log);
// [2,4,6]
```

---

# 9️⃣ Very Important Concept (Interview Level)

### ❌ Wrong Thinking:

People think:

```javascript
arr.map(async num => num * 2);
```

This gives final values.

No ❌

It gives:

```javascript
[Promise, Promise, Promise]
```

Because:

* `async` function ALWAYS returns a Promise.

---

# 🔟 Event Loop Concept (Why Delay Works)

When `setTimeout` runs:

1. JS registers timer in Web API
2. After 500ms → callback goes to **Callback Queue**
3. Event Loop pushes it to Call Stack when stack is empty
4. Promise gets resolved

That’s how asynchronous timing works.

---

# 1️⃣1️⃣ Final Concept Summary

| Concept       | Meaning                                 |
| ------------- | --------------------------------------- |
| setTimeout    | Delays execution                        |
| Promise       | Future value container                  |
| map()         | Synchronous array transformer           |
| async         | Makes function return Promise           |
| await         | Waits for Promise inside async function |
| Promise.all() | Waits for multiple promises             |

---

# 🔥 Most Important Takeaway

When using async operations inside `map()`:

👉 You ALWAYS get an array of Promises
👉 Use `Promise.all()` to get actual values

---

If you want, I can now:

* Explain visually with execution timeline
* Show a real-world API example
* Or give you interview-style tricky variations 😄



*/