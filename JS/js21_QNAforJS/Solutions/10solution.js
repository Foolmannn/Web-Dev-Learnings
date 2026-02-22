
// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(type) {
    return new Promise((resolve, reject) => {

        // Random delay between 1s and 4s
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;

        setTimeout(() => {
            resolve(`Your ${type} is ready! (Brewed in ${randomDelay} ms)`);
        }, randomDelay);

    });
}

brewCoffee("Cappuccino")
    .then(message => console.log(message))
    .catch(error => console.log(error));


    /*

    Nice ☕ this is again about understanding **Promises + async/await + random delay + simulation of real-world async process**.

Let’s build it step by step and understand the concepts deeply.

---

# ✅ Basic Version — `brewCoffee`

```javascript
function brewCoffee(type) {
    return new Promise((resolve, reject) => {

        // Random delay between 1s and 4s
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;

        setTimeout(() => {
            resolve(`☕ Your ${type} is ready! (Brewed in ${randomDelay} ms)`);
        }, randomDelay);

    });
}
```

---

## 🔹 Example Usage

```javascript
brewCoffee("Cappuccino")
    .then(message => console.log(message))
    .catch(error => console.log(error));
```

After a random delay, you’ll see something like:

```
☕ Your Cappuccino is ready! (Brewed in 2431 ms)
```

---

# 🧠 Now Let’s Understand the Concepts Clearly

---

## 1️⃣ Why Do We Use a Promise?

Brewing coffee takes time:

* Grinding beans
* Heating water
* Extracting coffee
* Adding milk

We cannot return the result immediately.

So instead of:

```javascript
return "Coffee Ready";
```

We return a **Promise** that resolves later.

---

## 2️⃣ Why Random Delay?

```javascript
Math.floor(Math.random() * 3000) + 1000;
```

This creates delay between:

```
1000ms → 4000ms
```

It simulates:

* Small coffee (fast)
* Complex drink (slow)
* Machine load variation

---

## 3️⃣ What setTimeout Does Internally

When `setTimeout` runs:

1. JS registers timer in Web APIs
2. After delay → callback goes to Callback Queue
3. Event Loop pushes it to Call Stack
4. `resolve()` is executed
5. Promise becomes fulfilled

That’s asynchronous behavior.

---

# 🚀 Better Version — With Failure Possibility

Sometimes machine can break or ingredient missing.

```javascript
function brewCoffee(type) {
    return new Promise((resolve, reject) => {

        const randomDelay = Math.floor(Math.random() * 3000) + 1000;

        setTimeout(() => {

            const machineWorking = Math.random() > 0.2; // 80% success

            if (machineWorking) {
                resolve(`☕ Your ${type} is ready!`);
            } else {
                reject(`❌ Sorry, the coffee machine failed while making ${type}.`);
            }

        }, randomDelay);

    });
}
```

---

## 🔹 Using async/await (Cleaner Way)

```javascript
async function serveCustomer() {
    try {
        const message = await brewCoffee("Latte");
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

serveCustomer();
```

---

# 🎯 Important Concepts This Question Tests

| Concept      | Meaning                              |
| ------------ | ------------------------------------ |
| Promise      | Future value container               |
| resolve()    | Coffee ready                         |
| reject()     | Machine failed                       |
| setTimeout   | Simulates brewing time               |
| async        | Function returns Promise             |
| await        | Waits for Promise result             |
| Random delay | Simulates real-life unpredictability |

---

# 🔥 Advanced Concept (Interview Level)

If multiple customers order at same time:

```javascript
const orders = [
    brewCoffee("Espresso"),
    brewCoffee("Mocha"),
    brewCoffee("Americano")
];

Promise.all(orders)
    .then(results => console.log(results))
    .catch(error => console.log(error));
```

This runs all brewing processes **in parallel**.

---

# 🏁 Final Takeaway

Whenever a task:

* Takes time
* Depends on external process
* Needs simulation of delay

👉 Use **Promise**
👉 Wrap async behavior inside it
👉 Use `async/await` for cleaner handling

---

If you want, next I can show:

* Sequential brewing vs parallel brewing difference
* Or visualize the event loop timeline
* Or connect this to a real UI button click example ☕


    */