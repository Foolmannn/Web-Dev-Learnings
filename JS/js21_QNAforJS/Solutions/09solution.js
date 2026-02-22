// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
function placeOrder(orderDetails) {
    return new Promise((resolve, reject) => {

        // Generate random delay between 500ms and 3000ms
        const randomDelay = Math.floor(Math.random() * 2500) + 500;

        setTimeout(() => {
            resolve(`✅ Order confirmed for ${orderDetails.itemName}. 
Order ID: ${Math.floor(Math.random() * 10000)}`);
        }, randomDelay);

    });
}



placeOrder({ itemName: "Laptop" })
    .then(message => {
        console.log(message);
    });

 /*
Nice one 👌 this is a very practical async scenario (similar to what would happen in your **ShopSathi** project when placing an order).

Let’s build it properly and understand every concept clearly.

---

# ✅ Basic Version of `placeOrder`

```javascript
function placeOrder(orderDetails) {
    return new Promise((resolve, reject) => {

        // Generate random delay between 500ms and 3000ms
        const randomDelay = Math.floor(Math.random() * 2500) + 500;

        setTimeout(() => {
            resolve(`✅ Order confirmed for ${orderDetails.itemName}. 
Order ID: ${Math.floor(Math.random() * 10000)}`);
        }, randomDelay);

    });
}
```

---

## 🔹 Example Usage

```javascript
placeOrder({ itemName: "Laptop" })
    .then(message => {
        console.log(message);
    });
```

Output after random delay:

```
✅ Order confirmed for Laptop.
Order ID: 4821
```

---

# 🧠 Now Let’s Understand the Concepts Properly

---

## 1️⃣ Why Do We Return a Promise?

Placing an order in real life:

* Payment processing
* Stock verification
* Database insertion
* Sending confirmation email

All of these take time.

So instead of returning result immediately, we return a **Promise** that resolves later.

---

## 2️⃣ What Is Random Delay Doing?

```javascript
const randomDelay = Math.floor(Math.random() * 2500) + 500;
```

This generates delay between:

```
500ms → 3000ms
```

It simulates:

* Fast server
* Slow server
* Network delay

Just like real ecommerce systems.

---

## 3️⃣ Why setTimeout?

`setTimeout()` simulates a backend process taking time.

It pushes the callback into the **event loop**, and once delay finishes, the Promise is resolved.

---

# 🧪 More Realistic Version (With Possible Failure)

Real systems can fail ❌ (payment declined, out of stock).

Let’s simulate that too.

```javascript
function placeOrder(orderDetails) {
    return new Promise((resolve, reject) => {

        const randomDelay = Math.floor(Math.random() * 2500) + 500;

        setTimeout(() => {

            const isSuccessful = Math.random() > 0.3; // 70% success rate

            if (isSuccessful) {
                resolve(`✅ Order confirmed for ${orderDetails.itemName}. 
Order ID: ${Math.floor(Math.random() * 10000)}`);
            } else {
                reject(`❌ Order failed for ${orderDetails.itemName}. Payment declined.`);
            }

        }, randomDelay);

    });
}
```

---

## 🔹 Using It With `.then()` and `.catch()`

```javascript
placeOrder({ itemName: "Phone" })
    .then(message => console.log(message))
    .catch(error => console.log(error));
```

---

# 🚀 Async/Await Version (Cleaner)

```javascript
async function processOrder() {
    try {
        const message = await placeOrder({ itemName: "Headphones" });
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

processOrder();
```

---

# 🎯 What Concepts This Question Tests

| Concept      | Why It’s Used                         |
| ------------ | ------------------------------------- |
| Promise      | To represent future result            |
| resolve()    | When order succeeds                   |
| reject()     | When order fails                      |
| setTimeout   | Simulate backend delay                |
| async/await  | Cleaner handling of async             |
| Random delay | Simulates real-world unpredictability |

---

# 🔥 Real-World Thinking (Very Important)

In your ShopSathi ecommerce app, real `placeOrder()` would:

1. Validate user session
2. Check stock in database
3. Deduct stock
4. Insert order into `orders` table
5. Process payment
6. Send confirmation

All of these are asynchronous → so Promise pattern is exactly how backend frameworks handle it.

---

If you want, I can now:

* Convert this into a backend PHP version
* Show how to connect it with a frontend button
* Or simulate multiple shoppers placing orders simultaneously (advanced async concept) 😄



 */