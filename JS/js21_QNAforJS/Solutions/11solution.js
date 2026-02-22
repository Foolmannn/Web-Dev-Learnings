// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.


const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 800 },
    { id: 2, name: "Shoes", category: "Fashion", price: 50 },
    { id: 3, name: "Phone", category: "Electronics", price: 500 },
    { id: 4, name: "T-shirt", category: "Fashion", price: 20 }
];
function filterProducts(products, criterion) {
    return products.filter(product => 
        product.category === criterion
    );
}
const electronics = filterProducts(products, "Electronics");
console.log(electronics);


/*

Good 👍 this question is testing your understanding of:

* Objects inside arrays
* The `filter()` method
* Returning a new array
* Dynamic filtering logic

Let’s build it properly and explain everything clearly.

---

# ✅ Basic Version – Filter by One Property

Suppose your products look like this:

```javascript
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 800 },
    { id: 2, name: "Shoes", category: "Fashion", price: 50 },
    { id: 3, name: "Phone", category: "Electronics", price: 500 },
    { id: 4, name: "T-shirt", category: "Fashion", price: 20 }
];
```

---

## 🔹 Function: filterProducts

```javascript
function filterProducts(products, criterion) {
    return products.filter(product => 
        product.category === criterion
    );
}
```

---

## 🔹 Usage

```javascript
const electronics = filterProducts(products, "Electronics");
console.log(electronics);
```

### ✅ Output:

```javascript
[
  { id: 1, name: "Laptop", category: "Electronics", price: 800 },
  { id: 3, name: "Phone", category: "Electronics", price: 500 }
]
```

---

# 🧠 Now Let’s Understand the Concepts

---

# 1️⃣ What Does `.filter()` Do?

`filter()`:

* Loops through the array
* Checks each element
* Returns a NEW array
* Keeps only elements where condition is true

Syntax:

```javascript
array.filter(callbackFunction)
```

Callback must return:

* `true` → keep item
* `false` → remove item

---

# 2️⃣ How This Line Works

```javascript
product => product.category === criterion
```

For each product:

* If category matches → true → keep it
* If not → false → remove it

---

# 3️⃣ More Flexible Version (Dynamic Filter)

Real e-commerce search should be flexible.

Let’s allow filtering by ANY property.

```javascript
function filterProducts(products, key, value) {
    return products.filter(product => 
        product[key] === value
    );
}
```

---

## 🔹 Example 1 – Filter by Category

```javascript
filterProducts(products, "category", "Fashion");
```

---

## 🔹 Example 2 – Filter by Price

```javascript
filterProducts(products, "price", 50);
```

---

# 🚀 Advanced Version – Multiple Conditions

Suppose you want:

* category = Electronics
* price < 600

```javascript
function filterProducts(products, filters) {
    return products.filter(product => {

        return Object.keys(filters).every(key => {
            return product[key] === filters[key];
        });

    });
}
```

---

### Usage:

```javascript
filterProducts(products, { category: "Electronics" });
```

---

# 🔥 Even More Realistic (Price Range Example)

```javascript
function filterProducts(products, criterion) {
    return products.filter(product => {
        if (criterion.category && product.category !== criterion.category) {
            return false;
        }

        if (criterion.minPrice && product.price < criterion.minPrice) {
            return false;
        }

        if (criterion.maxPrice && product.price > criterion.maxPrice) {
            return false;
        }

        return true;
    });
}
```

---

### Usage:

```javascript
filterProducts(products, {
    category: "Electronics",
    minPrice: 400,
    maxPrice: 900
});
```

---

# 🎯 What This Question Tests

| Concept          | Meaning                    |
| ---------------- | -------------------------- |
| Array of objects | Structured data            |
| filter()         | Returns new filtered array |
| Arrow function   | Short function syntax      |
| Dynamic keys     | product[key]               |
| Condition logic  | Boolean return             |

---

# 🏁 Final Takeaway

`filter()`:

* Does NOT modify original array
* Always returns a new array
* Requires condition returning true/false

---

If you want, I can now:

* Connect this to a real HTML search input
* Combine filter + sort
* Or simulate database-style searching like your ShopSathi project 😄



*/